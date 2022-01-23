export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '@element/(.*)/(.*)$': '<rootDir>/src/components/elements/$1/$2',
    '@layout/(.*)/(.*)$': '<rootDir>/src/components/layouts/$1/$2',
    '@module/(.*)/(.*)$': '<rootDir>/src/components/modules/$1/$2',
    '@template/(.*)/(.*)$': '<rootDir>/src/components/templates/$1/$2',
    '@constant/(.*)/(.*)$': '<rootDir>/src/constants/$1/$2',
    '@hook/(.*)/(.*)$': '<rootDir>/src/hooks/$1/$2',
    '@util/(.*)/(.*)$': '<rootDir>/src/utils/$1/$2',
  },
};