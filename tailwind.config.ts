import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans-serif)"],
                mono: ["var(--font-mono)"],
            },
            colors: {
                neutral: "rgb(127, 127, 127)",
                background: "#131313",
                base: "rgb(64, 64, 64)",
                primaryLight: "#a8c8fa",
                primaryDark: "#004075",
                dark: {
                    100: "#1C2021",
                    200: "#272B2C",
                    300: "#303030",
                    DEFAULT: "rgb(0, 0, 0)",
                },
                light: {
                    100: "rgb(235, 235, 235)",
                    200: "rgb(220, 220, 220)",
                    DEFAULT: "rgb(255, 255, 255)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
