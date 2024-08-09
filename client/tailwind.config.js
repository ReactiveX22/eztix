/** @type {import('tailwindcss').Config} */

import colors, { neutral } from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.green[600],
        background: colors.zinc[950],
        secondary: colors.green[600],
        neutral: colors.zinc[100],
        'neutral-500': colors.zinc[500],
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',
        sm: '0.77rem',
        lg: '1.7778rem',
      },
      lineHeight: {
        normal: '1.6',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
