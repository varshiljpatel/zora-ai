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
                neutral: "rgba(255, 255, 255, 0.5)",
                background: "#131313",
                base: "rgb(64, 64, 64)",
                dark: {
                    100: "#1C2021",
                    200: "rgb(60, 60, 60)",
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
