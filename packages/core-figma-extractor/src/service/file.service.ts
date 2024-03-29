import fs from 'fs';
import path from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import chalk from 'chalk';

import { ExtractOptions } from '../extract.js';

import { log, logError } from './logging.service.js';

export function createExportFile(args: { path: string; data?: string }, options: ExtractOptions) {
  if (args.data) {
    fs.writeFileSync(path.join(args.path), args.data);
    return;
  }

  const date = options.outputDate
    ? new Date()
        .toLocaleDateString('en', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .split('/')
        .join('-')
    : '';
  const version = options.outputVersion ? `v${options.version}` : '';
  const fileHeader = `/** auto-generated by ${options.extractorName} ${version} - ${date} */\n`;

  const fileData = fileHeader;

  fs.writeFileSync(path.join(args.path), fileData);
}

export function createExportJSONFile(options: { path: string; data?: string }) {
  // no comments are allowed in JSON
  fs.writeFileSync(path.join(options.path), options.data ? options.data : ``);
}

/**
 * Append content to existing files
 */
export function appendFile(options: { path: string; data?: string }) {
  if (!options.data) {
    const msg = chalk.red(`no data to append to file ${options.path}`);
    logError(msg);
    throw new Error(msg);
  }

  fs.appendFile(options.path, options.data, (err) => {
    if (err) {
      logError(chalk.red(`CSS color tokens failed ❌ `));
      throw err;
    }
    log(chalk.green(`updated file: ${options.path}`));
  });
}
