/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0077B6',
      heroBg: '#F5FAFC',
    },
    extend: {},
    fontFamily: {
      sans: ["Inter Sans", ...defaultTheme.fontFamily.serif],
      inter: ["Inter Sans"],
    },
  },
  plugins: [require('tailwind-hamburgers')],
}
