/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily:{
      "Onetwothirtyfour" : ["Onetwothirtyfour"],
      "Poppins-Regular" :["Poppins-Regular"],
      "DominosBlast":["DominosBlast"]

    }
  },
  plugins: [],
}