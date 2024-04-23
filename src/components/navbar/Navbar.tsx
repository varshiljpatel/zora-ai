"use client";

import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { navList } from "./navList";
import { useRouter } from "next/navigation";
import { useRouter as ur2 } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface INavbar {
	isBack?: boolean;
}

const Navbar = (props: INavbar) => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [isBack, setIsBack] = useState(false);
	const router: AppRouterInstance = useRouter();
	
	const handlePop = () => {
		router.back();
	}
	
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setIsBack(props.isBack || false);
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
		<div className="flex justify-start items-center">
			{isBack ? (
				<span
				onClick={handlePop}
				 className="cursor-pointer underline m-4 sm:mr-8 underline-offset-4">Back</span>
			) : (
				""
			)}
			{windowWidth >= 650 ? (
				<DesktopNavbar />
			) : (
				<MobileNavbar navList={navList} />
			)}
		</div>
	);
};

export default Navbar;
