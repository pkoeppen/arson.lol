module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'prettier',
    'gridsome'
  ],
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:gridsome/recommended'
  ],
  rules: {
    'no-console': 'off'
  }
}
