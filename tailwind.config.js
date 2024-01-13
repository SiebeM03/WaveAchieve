const colors = {
  'main': '#F8F8F8',
  'background': '#E6E6E6',
  'primary': '#0093EB',
  'secondary': '#10DFE2',
  'accent': '#FF9532'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: colors,
      lineHeight: {
        '7.5': '30px'
      }
    },
  },
}

module.exports.colors = colors