/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
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