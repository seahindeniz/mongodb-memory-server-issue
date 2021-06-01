import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  roots: ['./test'],
  testEnvironment: 'node',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testMatch: ['**/dbConnection.spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
