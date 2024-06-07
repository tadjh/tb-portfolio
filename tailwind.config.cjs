/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
      800: "800ms",
      1000: "1000ms",
    },
    extend: {
      animation: {
        fade: "1s ease-out fadeIn",
        grow: "1s cubic-bezier(.49,-0.13,.24,1.4) scaleUp",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleUp: {
          "0%": {
            scale: 0,
          },
          "50%": {
            scale: 0,
          },
          "100%": {
            scale: 1,
          },
        },
      },
      colors: {
        orange: {
          tadjh: "#f26522",
        },
        blue: {
          gulf: "#C9DFEC",
        },
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,150, 100, 0.35)",
          "0 0px 65px rgba(255, 150,100, 0.2)",
        ],
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
