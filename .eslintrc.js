module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'default-param-last': 'off',
    'node/no-deprecated-api': 'off',
    'node/no-path-concat': 'off',
    'array-callback-return': 'off',
    'multiline-ternary': 'off',
    camelcase: 'off',
    'no-return-assign': 'off'
  },
  globals: {
    fireEvent: 'writable',
    waitFor: 'writable',
    screen: 'writable',
    withRedux: 'writable',
    jest: 'writable',
    test: 'writable',
    expect: 'writable',
    describe: 'writable',
    afterEach: 'writable',
    beforeEach: 'writable',
    __DEV__: 'writable',
    CLIENT_ID: 'writable'
  }
}
