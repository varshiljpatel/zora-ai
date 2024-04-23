import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				neutral: "#7f7f7f",
				dark: {
					100: "#404040",
					DEFAULT: "#000000",
				},
				light: {
					100: "#efefef",
					DEFAULT: "#FFFFFF",
				},
			},
		},
	},
	plugins: [],
};
export default config;
