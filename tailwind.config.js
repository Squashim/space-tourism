/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "600px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				dark: "#0b0d17",
				blue: "#d0d6f9",
			},
			boxShadow: {
				exploreBtnShadow: "0px 0px 0px 50px rgba(255,255,255,.1)",
			},
			fontFamily: {
				barlowCondensed: ['"Barlow Condensed"', "sans-serif"],
				bellefair: ["Bellefair", "serif"],
				barlow: ["Barlow", "sans-serif"],
			},
		},
	},
	plugins: [],
};
