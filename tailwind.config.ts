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
                neutral: "rgb(127, 127, 127)",
                dark: {
                    100: "rgb(64,64,64)",
                    DEFAULT: "rgb(0, 0, 0)",
                },
                light: {
                    100: "rgb(239,239,239)",
                    DEFAULT: "rgb(255, 255, 255)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
