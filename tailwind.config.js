/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        'main': '#F8F8F8',
        'primary': '#0077BE',
        'secondary': '#10DFE2',
        'accent': '#FF9532'
      },
      lineHeight: {
        '7.5': '30px'
      }
    },
  },
  plugins: [],
}

