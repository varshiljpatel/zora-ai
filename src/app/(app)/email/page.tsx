"use client";

import Navbar from "@/components/navbar/Navbar";
import IconButton from "@/components/ui/buttons/IconButton";
import { ContentCopySharp, CopyAllSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const EmailPage = () => {
	const [email, setEmail] = useState("");

	useEffect(() => {
		const emailData =
			typeof window !== undefined
				? localStorage.getItem("email-data")
				: "";
		const formattedEmailData: string = emailData
			? emailData.replace(/\n/g, "<br>")
			: "";
		setEmail(formattedEmailData);
	}, []);

	return (
		<div className="sm:p-8 p-4 h-dvh">
			<Navbar />
			<div className="sm:py-8 p-4 flex sm:gap-y-8 gap-y-4 flex-col items-end">
				<p dangerouslySetInnerHTML={{ __html: email }}></p>
				<IconButton icon={<ContentCopySharp />}>COPY</IconButton>
			</div>
		</div>
	);
};

export default EmailPage;
