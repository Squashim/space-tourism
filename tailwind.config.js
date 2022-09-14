/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#0b0d17",
				blue: "#d0d6f9",
			},
			screens: {
				xs: "475px",
			},
			boxShadow: {
				exploreBtnShadow: "0px 0px 0px 60px rgba(255,255,255,.1)",
			},
			fontFamily: {
				barlowCondensed: "Barlow Condensed, sans-serif",
				bellefair: "Bellefair, serif",
				barlow: "Barlow, sans-serif",
			},
		},
	},
	plugins: [],
};
