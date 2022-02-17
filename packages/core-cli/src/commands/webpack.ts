import { spawnSync } from 'child_process';

import { Command, flags } from '@oclif/command';

import { getShellForPlatform } from '@newrade/core-node-utils';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities';

export default class Webpack extends Command {
  log = debugInstance(`${NS}:webpack`);
  logWarn = debugInstance(`${NS}:webpack:warn`);
  logError = debugInstance(`${NS}:webpack:error`);

  static description = 'Shortcut to run webpack with typescript (ts-node)';

  static examples = [`$ nr webpack serve --config webpack.dev.config.ts`];

  static args = [{ name: 'command' }];

  static flags = {
    config: flags.string({ char: 'c', description: 'path to config file (.ts)' }),
    /**
     * @since webpack-dev-server@v4
     * @see https://webpack.js.org/configuration/dev-server/#overlay
     */
    ['no-client-overlay']: flags.boolean({
      description:
        'disable the full-screen overlay in the browser when there are compiler errors or warnings',
    }),
  };

  async run() {
    enableDebug();

    const { args, flags } = this.parse(Webpack);

    const command = [
      `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/webpack/bin/webpack`,
      args.command || '',
      `${flags['no-client-overlay'] ? `--no-client-overlay` : ''}`,
      `--config ${flags.config}`,
    ].join(' ');

    this.log(`running: ${command}`);

    const cmd = spawnSync(command, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'inherit', 'pipe'],
      env: process.env,
    });

    if (cmd.stderr && cmd.stderr.toString().length) {
      const stderr = cmd.stderr.toString();
      if (/error/gi.test(stderr)) {
        this.logError(`${stderr}`);
        throw new Error(stderr);
      }
      this.log(`${stderr}`);
    }

    this.log(`finished`);
  }
}
