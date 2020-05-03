const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  snapshotSerializers: ['jest-emotion'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
