module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "array-bracket-spacing": ['error', 'always'],
    'object-curly-newline': ["error", { "multiline": true }],
    'react/prop-types': 0,
    "react/jsx-first-prop-new-line": ["error", "always"],
    "semi": ["error", "always"]
  },
};
