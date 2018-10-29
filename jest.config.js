module.exports = {
  // verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/src/server/**',
    '!**/src/index.js',
    '!**/src/App.js'
  ],
  testMatch: ['<rootDir>/tests/**/?(*.)(spec|test).js?(x)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // testEnvironment: 'jsdom',
  // testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '/index.js/'
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
    '^Pages(.*)$': '<rootDir>/src/pages$1',
    '^Images(.*)$': '<rootDir>/src/static/images$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    'Actions(.*)$': '<rootDir>/src/store/actions$1',
    'Constants(.*)$': '<rootDir>/src/store/constants$1',
    'Reducers(.*)$': '<rootDir>/src/store/reducers$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>tests/setup/setupEnzyme.js'
};
