// @ts-check

/// <reference types="@jest/types" />
/**
 * Jest config options for core-react-ui's packages (in src/*)
 */

/** @typedef {import('ts-jest').InitialOptionsTsJest} */
export const jestUiPackagesConfig = {
  roots: ['<rootDir>/src'],
  modulePaths: ['../../../../<rootDir>/node_modules', '<rootDir>/node_modules', '<rootDir>'],
};
