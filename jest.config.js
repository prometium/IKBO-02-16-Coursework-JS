module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
};
