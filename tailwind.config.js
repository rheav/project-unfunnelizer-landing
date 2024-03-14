/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: { startCold: "#3c7cfc", endCold: "#59c0e8", startHot: "#ff4d4d", endHot: "#f9cb28" },
			animation: {
				"spin-slow": "spin 3s linear",
			},
			rotate: {
				360: "360deg",
			},
		},
		plugins: [],
	},
};
