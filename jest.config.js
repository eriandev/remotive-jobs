module.exports = {
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1'
  },
  preset: 'jest-preset-angular',
  coverageReporters: [
    'text',
    'html'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts'
  ]
}
