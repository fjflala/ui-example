/**
 *  Jest config
 */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js*}',
    '!src/**/index.story.js',
  ],
  // setupTestFrameworkScriptFile: '<rootDir>/test/config.js',
  coverageReporters: [
    'html',
    'lcov'
  ]
};
