/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
    },
    extend: {
      colors: {
        orange: {
          tadjh: "#f26522",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
