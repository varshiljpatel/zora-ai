import type { Metadata } from "next";
import "./globals.css";
import { stringConfig } from "@/config/strings";
import JotaiProviders from "@/providers/JotaiProvider";
import { fontMono, sansSerifFont } from "@/config/fonts";
import AuthProvider from "@/providers/AuthProvider";

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
            <body
                className={`${sansSerifFont.className} ${fontMono.variable} text-[16px]`}
            >
                <JotaiProviders>
                    <AuthProvider>{children}</AuthProvider>
                </JotaiProviders>
            </body>
        </html>
    );
}
