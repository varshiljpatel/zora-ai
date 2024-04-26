import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { stringConfig } from "@/config/strings";

const sansSerifFont = localFont({
    src: [
        {
            path: "./fonts/HelveticaNeueCyr-Roman.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/HelveticaNeueCyr-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./fonts/HelveticaNeueCyr-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/HelveticaNeueCyr-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "./fonts/HelveticaNeueCyr-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/HelveticaNeueCyr-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "./fonts/HelveticaNeueCyr-Heavy.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/HelveticaNeueCyr-HeavyItalic.woff2",
            weight: "800",
            style: "italic",
        },
        {
            path: "./fonts/HelveticaNeueCyr-Black.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/HelveticaNeueCyr-BlackItalic.woff2",
            weight: "900",
            style: "italic",
        },
    ],
});

const fontMono = IBM_Plex_Mono({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: stringConfig.title,
    description: stringConfig.description,
    applicationName: stringConfig.title,
    authors: [
        {
            name: stringConfig.author.name,
            url: stringConfig.author.url,
        },
    ],
    openGraph: {
        title: stringConfig.title,
        description: stringConfig.description,
        images: [
            {
                url: "./opengraph-image.jpg",
                width: 1000,
                height: 1000,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sansSerifFont.className} ${fontMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
