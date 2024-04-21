import React from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import OutlineButton from "../ui/buttons/OutlineButton";

const handleOnClick = () => {};

const DesktopNavbar = () => {
	return (
		<div className="flex justify-between items-center">
			<Link href={"/"}>
				<Logo height={26} color="#000000" />
			</Link>
			<ul className="flex gap-x-8 font-medium items-center">
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/"}>About</Link>
				</li>
				<OutlineButton onClick={handleOnClick}>Purchased</OutlineButton>
			</ul>
		</div>
	);
};

export default DesktopNavbar;
