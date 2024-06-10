/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "selector",
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
        write: "1.5s ease write forwards",
        revealRight: "2s cubic-bezier(.50,0,0,1) revealRight forwards",
      },
      colors: {
        orange: {
          tadjh: "#f26522",
        },
        blue: {
          gulf: "#c9dfec",
          mirage: "#636f78",
        },
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 150, 100, 0.35)",
          "0 0px 65px rgba(255, 150, 100, 0.2)",
        ],
        beefy: ["2px 2px 5px rgba(0, 0, 0, 1)"],
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
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
        revealRight: {
          from: {
            clipPath:
              "polygon(-5% 150%, -5% 150%, -5% 150%, -5% 150%, 20% 150%, 20% 150%)",
          },
          "10%": {
            clipPath:
              "polygon(-5% 150%, -5% -5%, -5% -5%, -5% 110%, 20% 110%, 20% 150%)",
          },
          to: {
            clipPath:
              "polygon(-5% 150%, -5% -5%, 110% -5%, 110% 110%, 20% 110%, 20% 150%)",
          },
        },
        write: {
          to: {
            strokeWidth: "var(--final-stroke-width)",
            strokeDashoffset: 0,
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-duration": (value) => ({
            "animation-duration":
              typeof value === "string" && value.endsWith("ms")
                ? value
                : `${value}ms`,
          }),
        },
        { values: theme("transitionDelay") },
      );
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay":
              typeof value === "string" && value.endsWith("ms")
                ? value
                : `${value}ms`,
          }),
        },
        { values: theme("transitionDelay") },
      );
      matchUtilities(
        {
          "stroke-dasharray": (value) => ({
            "stroke-dasharray": value,
          }),
        },
        { values: { 0: "0" } },
      );
      matchUtilities(
        {
          "stroke-dashoffset": (value) => ({
            "stroke-dashoffset": value,
          }),
        },
        { values: { 0: "0" } },
      );
    }),
  ],
};
