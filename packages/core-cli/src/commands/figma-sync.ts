import path from 'path';

import { Command, flags } from '@oclif/command';
import debug from 'debug';
import * as t from 'io-ts';

import { extract } from '@newrade/core-figma-extractor';
import { loadDotEnv } from '@newrade/core-node-utils';

import { NS } from '../utilities/log.utilities.js';

export type ENV = t.TypeOf<typeof Env>;
export const Env = t.intersection([
  t.type({}),
  t.type({
    FIGMA_TOKEN: t.string,
    FIGMA_FILE: t.string,
  }),
]);

export default class FigmaSync extends Command {
  log = debug(`${NS}:figma-sync`);
  logWarn = debug(`${NS}:figma-sync:warn`);
  logError = debug(`${NS}:figma-sync:error`);

  static description = 'sync design tokens from figma file';

  static examples = [`$ nr figma-sync`];

  static flags = {
    test: flags.boolean({
      char: 't',
      description:
        'the test flag is used in integration tests, it will not output versions or dates',
    }),
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'path', description: 'relative output path' }];

  async init() {}

  async run() {
    const env = loadDotEnv<ENV>({
      schema: Env,
      dotEnvPath: '.env',
      packageName: 'core-cli',
    });

    const { args, flags } = this.parse(FigmaSync);

    this.log(`running: extract command`);

    await extract({
      figmaFile: env.FIGMA_FILE,
      figmaToken: env.FIGMA_TOKEN,
      outputDir: path.resolve(process.cwd(), args && args.path ? args.path : 'figma-export'),
      inputColorThemeNamespace: false,
      outputVersion: flags.test ? false : true,
      outputDate: flags.test ? false : true,
    });

    this.log(`running: extract command`);
  }
}
