module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: [
    '<rootDir>/tests/unit/setup.js'
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30
    }
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,vue}'
  ],
  coverageDirectory: '<rootDir>/tests/unit/_coverage',
}
