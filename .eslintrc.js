module.exports = {
  extends: ['leozera', 'next/core-web-vitals'],
  rules: {
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
