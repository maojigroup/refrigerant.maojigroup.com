import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1fcfa',
          100: '#cff8f0',
          200: '#9ff0e3',
          300: '#67e1d2',
          400: '#38c9bc',
          500: '#1c9e94',
          600: '#168b85',
          700: '#166f6b',
          800: '#165957',
          900: '#174a49',
          950: '#072c2c',
        },
      },
    },
  },
  plugins: [tailwindTypography],
};
