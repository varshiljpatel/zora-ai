import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

export const sansSerifFont = localFont({
    src: [
        {
            path: "../assets/fonts/HelveticaNeueCyr-Roman.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-Heavy.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-HeavyItalic.woff2",
            weight: "800",
            style: "italic",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-dark.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "../assets/fonts/HelveticaNeueCyr-darkItalic.woff2",
            weight: "900",
            style: "italic",
        },
    ],
});

export const fontMono = IBM_Plex_Mono({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
    variable: "--font-mono",
});
