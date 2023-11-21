module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/no-loop-func': 0,
    'max-classes-per-file': 0,
  },
};
