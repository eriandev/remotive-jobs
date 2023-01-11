const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,css}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', ...fontFamily.serif],
      manrope: ['montserrat', ...fontFamily.mono]
    },
    colors: {
      primary: '#ff871a',
      secondary: '#fed294',
      tertiary: '#fff6e9',
      chocolate: '#532a21',
      brown: '#b58c83',
      gray: '#b9bdcf'
    }
  },
  plugins: []
}
