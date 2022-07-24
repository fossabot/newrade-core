// @ts-check

/// <reference types="@jest/types" />

import { baseJestConfig } from '@newrade/core-jest-config';

import { jestUiPackagesConfig } from '../../test/jest-ui-packages.config.js';

/** @typedef {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...baseJestConfig,
  ...jestUiPackagesConfig,
  setupFilesAfterEnv: [],
};

export default config;
