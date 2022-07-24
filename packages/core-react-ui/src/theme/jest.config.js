// @ts-check

/// <reference types="@jest/types" />

import { baseJestConfig } from '@newrade/core-jest-config';

/** @typedef {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...baseJestConfig,
  roots: ['<rootDir>/src'],
  modulePaths: ['../../../../<rootDir>/node_modules', '<rootDir>/node_modules', '<rootDir>'],
  setupFilesAfterEnv: [],
};

export default config;
