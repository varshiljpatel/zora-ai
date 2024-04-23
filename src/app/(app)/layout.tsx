import React from "react";

export default function IndexLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-light w-full h-full">
			<div className="sm:w-[60%] m-auto w-full h-dvh">
				<main>{children}</main>
			</div>
		</div>
	);
}
