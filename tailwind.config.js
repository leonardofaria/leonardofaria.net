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
      // Segmented control component
      translate: {
        fullx2: '200%',
        fullx3: '300%',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-fira-code)', ...fontFamily.mono],
      },
      colors: {
        mastodon: '#3088d4',
        twitter: '#1da1f2',
        github: '#333333',
        linkedin: '#0a66c2',
        email: '#000000',
        buymeacoffee: '#fbdb04',
        rss: '#ff6600',
        charade: {
          50: '#F4F4F5',
          100: '#EAEAEB',
          200: '#CACACD',
          300: '#AAAAAF',
          400: '#6A6A74',
          500: '#2A2A38',
          600: '#262632',
          700: '#191922',
          800: '#131319',
          900: '#0D0D11',
        },
        'amethyst-smoke': {
          50: '#FAFAFB',
          100: '#F4F4F7',
          200: '#E4E4EB',
          300: '#D3D3DE',
          400: '#B3B3C6',
          500: '#9292AD',
          600: '#83839C',
          700: '#585868',
          800: '#42424E',
          900: '#2C2C34',
        },
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
