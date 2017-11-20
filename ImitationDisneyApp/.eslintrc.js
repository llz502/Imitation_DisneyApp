// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': 'off',
    'space-infix-ops': 'off',
    'space-before-blocks': 'off',
    'key-spacing': 'off',
    'block-spacing': 'off',
    'no-trailing-spaces': 'off',
    'space-before-function-paren': 'off',
    'padded-blocks': 'off',
    'comma-spacing': 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': 'off',
    'indent': 'off',
    'no-multi-spaces': 'off',
    'brace-style': 'off',
    'camelcase': 'off',
    'keyword-spacing': 'off',
    'spaced-comment': 'off',
    'new-parens': 'off',
    'eqeqeq': 'off',
    'operator-linebreak': 'off',
    'space-in-parens': 'off'
  }
}
