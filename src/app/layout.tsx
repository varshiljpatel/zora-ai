import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fontSans = IBM_Plex_Sans({
	weight: "400",
	style: "normal",
	subsets: ["cyrillic"],
	preload: true,
});

export const metadata: Metadata = {
	title: "zora",
	description: "zora | An ai business email generator.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="{fontSans.className} text-[16px]">{children}</body>
		</html>
	);
}
