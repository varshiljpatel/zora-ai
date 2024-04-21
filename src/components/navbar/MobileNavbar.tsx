"use client";

import React, { useState } from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { ArrowOutwardSharp } from "@mui/icons-material";

const MobileNavbar = (props: {
	navList: { text: string; path?: string }[];
}) => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<div className="flex z-50 relative justify-between items-center px-4">
				<Link href={"/"} onClick={() => setIsVisible(false)}>
					<Logo height={26} />
				</Link>
				<button
					onClick={() => setIsVisible(!isVisible)}
					className="underline underline-offset-4 font-medium"
				>
					Menu
				</button>
			</div>
			<div
				className={`w-full absolute top-0 bottom-0 right-0 left-0 z-10 bg-white flex flex-col items-start gap-y-6 p-8 pt-20 px-8 rounded-b-2xl ${
					isVisible ? "h-full block" : "h-0 hidden"
				}`}
			>
				{props.navList.map((navItem, index) => {
					return (
						<NavItem
							onClick={() => setIsVisible(false)}
							key={index}
							className="border-b-2 pb-1 border-black w-full border-dotted"
							text={navItem.text}
							path={navItem.path}
						/>
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
	key: number;
}) => {
	return (
		<>
			{props.path ? (
				<Link
					key={props.key}
					onClick={props.onClick}
					href={props.path}
					className={`${props.className}`}
				>
					{props.text}
					<ArrowOutwardSharp fontSize="small" />
				</Link>
			) : (
				<span key={props.key} className={props.className}>{props.text}</span>
			)}
		</>
	);
};

export default MobileNavbar;
