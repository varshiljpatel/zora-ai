"use client";

import React, { useEffect, useState } from "react";
import { Hourglass as Spinner } from "react-loader-spinner";

interface IIconButton {
	icon?: any;
	isLoading?: boolean;
	color?: string;
	children?: React.ReactNode;
	width?: number;
	onClick?: React.MouseEventHandler;
}

const IconButton = (props: IIconButton) => {
	const [width, setWidth] = useState(200);

	useEffect(() => {
		if (window.innerWidth >= 650) {
			setWidth(props.width || width);
		} else {
			setWidth(props.width || width / 2);
		}
	}, []);

	return (
		<button
		        style={{ backgroundColor: `${props.color || "#000000"}` }}
			onClick={props.onClick}
			className={`justify-center flex items-center gap-x-2 text-[14px] h-[42px] rounded-full transition-all text-white font-medium px-6`}
		>
			{props.isLoading ? (
				<Spinner
					height={16}
					colors={["#ffffff", "#ffffff"]}
					width={16}
				/>
			) : (
				<>
					{props.icon && <span>{props.icon}</span>}
					<span className="sm:block hidden">{props.children}</span>
				</>
			)}
		</button>
	);
};

export default IconButton;
