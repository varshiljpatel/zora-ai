import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { stringConfig } from "@/config/strings";

const sansSerifFont = localFont({
    src: "./fonts/HelveticaNeueCyr-Roman.woff2",
});

// const fontSans = IBM_Plex_Sans({
// 	weight: "400",
// 	style: "normal",
// 	subsets: ["cyrillic"],
// 	preload: true,
// });

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
            <body className={sansSerifFont.className}>{children}</body>
        </html>
    );
}
