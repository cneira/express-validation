module.exports = {
  eslint: 'recommended',
  env: {
    node: true
  },
  rules: {
    'brace-style': [2, '1tbs'],
    'comma-spacing': 2,
    'comma-style': [2, 'last'],
    'default-case': 2,
    'func-style': [2, 'declaration'],
    'guard-for-1in': 0,
    'key-spacing': 2,
    'new-cap': 1,
    'no-floating-decimal': 2,
    'no-mixed-requires': 0,
    'no-nested-ternary': 2,
    'no-shadow': 0,
    'no-undef': 1,
    'no-underscore-dangle': 0,
    'no-unused-vars': [1, { vars: 'local', args: 'none' }],
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'always'],
    'keyword-spacing': [2, { after: true, before: true }],
    'space-before-blocks': 2,
    'space-before-function-paren': 2,
    'space-infix-ops': 2,
    'spaced-comment': 2,
    'valid-jsdoc': [0, { prefer: { return: 'returns'}}],
    'wrap-iife': [2, 'any'],
    curly: [2, 'multi-line'],
    indent: [2, 2],
    quotes: [1, 'single'],
    radix: 2,
    semi: [2, 'always'],
    strict: 0
  }
}
