"use client";

import React, { useState } from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { CallMadeSharp } from "@mui/icons-material";

const MobileNavbar = (props: {
	navList: { text: string; path?: string }[];
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isBack, setIsBack] = useState(false);

	return (
		<>
			<div
				className={`flex z-50 relative font-medium w-full justify-between items-center p-4`}
			>
				<Link href={"/"} onClick={() => setIsVisible(false)}>
					<Logo height={26} color="#000000" />
				</Link>
				<button
					onClick={() => setIsVisible(!isVisible)}
					className="underline underline-offset-4 font-medium"
				>
					{isVisible ? "Close" : "Menu"}
				</button>
			</div>
			<div
				className={`w-full absolute top-0 bottom-0 right-0 left-0 z-10 bg-light flex flex-col items-start gap-y-6 p-8 pt-24 px-8 rounded-b-2xl ${
					isVisible ? "h-full block" : "h-0 hidden"
				}`}
			>
				{props.navList.map((navItem, index) => {
					return (
						<div key={index} className="border-b-2 border-dotted border-black pb-1">
						<NavItem
							onClick={() => setIsVisible(false)}
							className="w-full"
							text={navItem.text}
							path={navItem.path}
						/>
						</div>
				);
				})}
			</div>
		</>
	);
};

const NavItem = (props: {
	text: string;
	path?: Url;
	className?: string;
	onClick?: React.MouseEventHandler;
}) => {
	return (
		<>
			{props.path ? (
				<Link
					onClick={props.onClick}
					href={props.path}
					className={`${props.className}`}
				>
					{props.text}
	{/*<CallMadeSharp fontSize="small" />*/}
				</Link>
			) : (
				<span className={props.className}>{props.text}</span>
			)}
		</>
	);
};

export default MobileNavbar;
