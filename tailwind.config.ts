import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
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
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
