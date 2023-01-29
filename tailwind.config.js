const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
    './content/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/aspect-ratio')],
};
