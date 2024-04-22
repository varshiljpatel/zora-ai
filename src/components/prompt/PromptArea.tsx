"use client";

import React, { useState } from "react";
import IconButton from "../ui/buttons/IconButton";
import Send from "@mui/icons-material/SendSharp";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const PromptArea = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [promptValue, setPromptValue] = useState("");
	let router: AppRouterInstance | null;

	router = useRouter();

	const handleOnClick = async () => {
		setIsLoading(true);

		if (promptValue.length <= 0) {
			setIsLoading(false);
			return;
		}

		try {
			const response = await fetch("/api/generate-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt: promptValue }),
			});

			if (!response.ok) {
				throw new Error("Failed to send request");
			}

			const data = await response.json();
			await localStorage.setItem("email-data", data.message);
			router!.push("/email");
		} catch (error: any) {
			console.error("Error:", error.message);
		}

		setIsLoading(false);
	};

	const handleTextareaChange: React.ChangeEventHandler = (event: any) => {
		setPromptValue(event.target.value);
	};

	return (
		<div className="w-full p-4 flex gap-x-4 sm:gap-x-8">
			<textarea
				id="prommt"
				value={promptValue}
				onChange={handleTextareaChange}
				rows={3}
				placeholder="Enter email purpose here..."
				className="resize-none transition-all border-2 p-4 py-2 placeholder:text-black border-black bg-[#efefef] rounded-2xl min-h-24 w-full"
			></textarea>
			<IconButton
				icon={<Send />}
				color={promptValue.trim().length > 0 ? "#000000" : "#7f7f7f"}
				onClick={handleOnClick}
				isLoading={isLoading}
			>
				SEND
			</IconButton>
		</div>
	);
};

export default PromptArea;
