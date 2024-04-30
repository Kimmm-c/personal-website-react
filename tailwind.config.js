/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1rem',
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/checkmark.jpeg")',
      },
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'turquoise': '#23999e',
      'dark-turquoise': '#1d5454',
      'black': '#000000',
      'grey': '#717273',
      'light-blue': '#6a9cc8',
      'pale-blue': '#c0d6e4',
      'light-grey': '#eeeeee',
      'white': '#ffffff',
      'x-light-grey': '#f5faf8',
      'wine-red': '#690439'
    }
  },
  plugins: [],
}
