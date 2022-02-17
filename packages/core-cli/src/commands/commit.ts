import { spawnSync } from 'child_process';
import * as path from 'path';

import { Command } from '@oclif/command';

import { getShellForPlatform } from '@newrade/core-node-utils';

export default class Commit extends Command {
  static description = 'call the commit script in the repo root';

  static examples = [`$ nr commit`];

  async run() {
    spawnSync(`yarn commit`, {
      cwd: path.join('..', '..'),
      shell: getShellForPlatform(),
      stdio: 'inherit',
      env: process.env,
    });
  }
}
