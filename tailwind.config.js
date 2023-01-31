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
      colors: {
        mastodon: '#3088d4',
        twitter: '#1da1f2',
        github: '#333333',
        linkedin: '#0a66c2',
        email: '#000000',
        rss: '#ff6600',
      },
      // wiggle animation for the 👋
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '30%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/aspect-ratio')],
};
