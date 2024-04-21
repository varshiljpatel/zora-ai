"use client";

import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { navList } from "./navList";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setIsVisible(true);
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	return (
		<div>
			{windowWidth >= 650 ? (
				<DesktopNavbar />
			) : (
				<MobileNavbar navList={navList} />
			)}
		</div>
	);
};

export default Navbar;
