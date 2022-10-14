/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  transformIgnorePatterns: ["/node_modules/(?!@planetscale)"],
  testEnvironment: 'node',
};
