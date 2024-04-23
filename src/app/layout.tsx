import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
	title: "zora",
	description: "zora | An ai email writer for business.",
	applicationName: "zora",
	authors: [
		{
			name: "ascen",
			url: "https://www.github.com/anascen",
		},
	],
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
