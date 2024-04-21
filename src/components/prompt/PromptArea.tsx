"use client";

import React, { useState } from "react";
import IconButton from "../ui/buttons/IconButton";
import Send from "@mui/icons-material/SendSharp";

const PromptArea = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleOnClick = () => {
		setIsLoading(!isLoading);
	};

	return (
		<div className="w-full flex gap-x-4 sm:gap-x-8">
			<textarea
				id="prommt"
				rows={3}
				placeholder="Enter email purpose here..."
				className="resize-none transition-all border-2 p-4 py-2 placeholder:text-black border-black bg-[#efefef] rounded-2xl h-20 w-full"
			></textarea>
			<IconButton
				icon={<Send />}
				onClick={handleOnClick}
				isLoading={isLoading}
			>
				SEND
			</IconButton>
		</div>
	);
};

export default PromptArea;
