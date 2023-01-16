module.exports = {
  extends: [
    'leozera',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'no-param-reassign': 'off',
    // TODO: move this to eslint-config-leozera
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};
