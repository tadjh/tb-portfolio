/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		transitionDuration: {
		  DEFAULT: "300ms",
		  800: "800ms",
		  1000: "1000ms",
		},
		extend: {
		  colors: {
			orange: {
			  tadjh: "#f26522",
			},
			blue: {
			  gulf: "#C9DFEC",
			},
		  },
		  fontFamily: {
			sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
		  },
		},
	  },	
	plugins: [],
}
