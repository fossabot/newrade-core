import chalk from 'chalk';
import debug from 'debug';
import * as Figma from 'figma-js'; // DON'T import Figma from 'figma-js'
import fs from 'fs';
import path from 'path';
import { extractFigmaColors } from '../color/extract-color';
import {
  createColorPaletteCSS,
  createColorPaletteJSON,
  createColorPaletteSCSS,
  createColorPaletteTS,
} from '../color/generate-tokens';
import { FileType, outputColorFiles } from '../constants/figma-colors.constants';
const log = debug('newrade:core-figma-extractor:extract');
const logWarn = log.extend('warn');
const logError = log.extend('error');

type ExtractConfig = {
  figmaToken?: string;
  figmaFile?: string;
  outputDir: string;
  // ... more options
};

export function extract({ figmaFile, figmaToken, outputDir }: ExtractConfig) {
  if (!figmaFile) {
    logError('no figma file specified');
    throw Error('no figma file specified');
  }

  if (!figmaToken) {
    logError('no figma token specified');
    throw Error('no figma token specified');
  }

  log(`connecting to Figma API for file ${figmaFile}...`);

  const client = Figma.Client({
    personalAccessToken: figmaToken,
  });

  log(chalk.greenBright(`Start the extraction process 🚀 `));

  log(`retrieving file styles\t`);

  client
    .fileStyles(figmaFile)
    .then(({ data }) => {
      if (!data.meta.styles?.length) {
        logError(`no styles found`);
        return;
      }

      log(`retrieving file styles\t ${chalk.green('ok')}`);
      log(`found ${data.meta.styles.length} file styles`);

      log(`extracting color styles...`);

      return extractFigmaColors(data.meta.styles);
    })
    .then((colorTokens) => {
      if (!colorTokens) {
        logError(`extracting colors failed ❌ `);
        throw new Error('extracting colors failed ❌ ');
      }

      const colorsNumber = Object.keys(colorTokens).length;

      if (!colorsNumber) {
        logWarn(`no colors were extracted ❌ `);
        return;
      }

      log(chalk(`found ${colorsNumber} colors`));

      /**
       * Writing all export files
       */
      const project = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../../../package.json'), 'utf-8')
      );
      fs.mkdirSync(outputDir, { recursive: true });

      Object.keys(outputColorFiles).forEach((fileType: string) => {
        const type = fileType as FileType;
        if (type === FileType.JSON) {
          fs.writeFileSync(path.join(outputDir, outputColorFiles[fileType as FileType]), ``);
          return;
        }
        fs.writeFileSync(
          path.join(outputDir, outputColorFiles[fileType as FileType]),
          `/** auto-generated by ${project.name} v${project.version} - ${new Date()
            .toLocaleDateString()
            .split('/')
            .join('-')} */\n`
        );
      });
      createColorPaletteCSS(colorTokens, path.join(outputDir, outputColorFiles.CSS));
      createColorPaletteSCSS(colorTokens, path.join(outputDir, outputColorFiles.SCSS));
      createColorPaletteTS(colorTokens, path.join(outputDir, outputColorFiles.TS));
      createColorPaletteJSON(colorTokens, path.join(outputDir, outputColorFiles.JSON));
    })
    .catch((error) => {
      logError(`error occured: ${error.message}`);
    });
}

// log(`extracting text styles:\t ${chalk.green('done')}`);
// log(`extracting exports:\t ${chalk.green('done')}`);
