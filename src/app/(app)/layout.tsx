"use client";

import Logo from "@/assets/logo/Logo";
import { useEffect, useState } from "react";

export default function IndexLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 1500);
	}, []);

	const contentStyle: React.CSSProperties = {
		transition: "all 0.5s ease-in-out",
	};

	const loadingStyle: React.CSSProperties = {
		height: loaded ? "0dvh" : "100dvh",
		transition: "all 0.75s cubic-bezier(.68,.15,.41,1)",
	};

	return (
		<>
			<div className="bg-white w-full h-full">
				<div style={loadingStyle} className="w-full h-dvh z-50 flex items-center sm:pl-48 max-sm:justify-center m-auto bg-black">
					<Logo height={60} color="white" />
				</div>
				<div style={contentStyle} className="sm:w-[60%] m-auto w-full h-dvh">
					<main>{children}</main>
				</div>
			</div>
		</>
	);
}
