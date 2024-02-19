/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'emir': "url('./emir.jpg')",
      }
    },
    fontFamily: {
      'lato':['Lato','sans-serif'],
      'system-ui':['system-ui'],
      'roboto': ['Roboto', 'sans-serif'],
      'libre': ['Libre Baskerville', 'serif'],
       'openSans': ['Open Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

