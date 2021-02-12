import { DEPLOY_ENV } from '@newrade/core-common';
import * as t from 'io-ts';

export const DeployEnv = t.keyof({
  [DEPLOY_ENV.LOCAL]: DEPLOY_ENV.LOCAL,
  [DEPLOY_ENV.DEV]: DEPLOY_ENV.DEV,
  [DEPLOY_ENV.STAGING]: DEPLOY_ENV.STAGING,
  [DEPLOY_ENV.PRODUCTION]: DEPLOY_ENV.PRODUCTION,
});

export type DeployEnvType = t.TypeOf<typeof DeployEnv>;
