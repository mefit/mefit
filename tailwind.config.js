/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,md}"],
  theme: {
    extend: {
      colors: {
        mefit: {
          light: '#d0e4fe',
          blue:  '#2a71cb',
          bold:  '#527aa5',
          dark:  '#2d4759'
        }
      }
    },
  },
  plugins: [],
}
