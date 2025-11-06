export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}', './src/pages/**/*.{vue,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#c93a53',
          600: '#c93a53',
          700: '#a92d42',
          500: '#e46a7e',
        },
      },
    },
  },
  plugins: [import('@tailwindcss/typography')],
};
