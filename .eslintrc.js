module.exports = {
  extends: 'airbnb',
  plugins: ['import', 'flowtype'],
  parser: 'babel-eslint',
  rules: {
    'flowtype/generic-spacing': 'off',
    'import/order': [
      'error',
      { 'newlines-between': 'always-and-inside-groups' },
    ],
    'import/default': 'off',
    'import/named': 'off',
    'no-undef': 'error',
    'arrow-parens': 'off',
    'no-undef-init': 'error',
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'space-before-function-paren': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'func-names': 'off',
    semi: 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'function-paren-newline': 'off',
  },
}
