module.exports = {
  verbose: true,
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@components/(.*)': '<rootDir>/src/app/components/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
  },
  preset: 'jest-preset-angular',
  coverageReporters: ['text', 'html'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}
