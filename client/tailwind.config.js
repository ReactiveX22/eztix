/** @type {import('tailwindcss').Config} */

import colors, { neutral } from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald[500],
        background: colors.zinc[950],
        secondary: colors.emerald[950],
        neutral: colors.zinc[100],
      },
    },
  },
  plugins: [],
};
