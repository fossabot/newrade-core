// @ts-check

/// <reference types="@jest/types" />

import { baseJestConfig } from '@newrade/core-jest-config';

/** @typedef {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...baseJestConfig,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [],
};

export default config;
