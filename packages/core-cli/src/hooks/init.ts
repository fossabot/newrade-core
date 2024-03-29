import { Hook } from '@oclif/core';

import { log } from '../utilities/log.utilities';

/**
 * @see https://oclif.io/docs/hooks
 */
const hook: Hook<'init'> = async function (opts) {
  log(`nr cli v${this.config.version}`);
  log(`Starting...`);
};

export default hook;
