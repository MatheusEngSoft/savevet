/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'roboto': ['Roboto', 'sans-serif'],
      'fraunces':['Fraunces', 'sans-serif'],
      'sans':['Open-Sans', 'sans-serif'],
      'montserrat':['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

