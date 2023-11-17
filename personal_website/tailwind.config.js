/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lato':['Lato','sans-serif'],
      'system-ui':['system-ui']
    }
  },
  plugins: [],
}

