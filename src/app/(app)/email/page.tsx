"use client";

import Navbar from "@/components/navbar/Navbar";
import IconButton from "@/components/ui/buttons/IconButton";
import { ContentCopySharp, CopyAllSharp } from "@mui/icons-material";
import React from "react";

const EmailPage = () => {
	const emailData = localStorage.getItem("email-data");
	const formattedEmailData: string = emailData
		? emailData.replace(/\n/g, "<br>")
		: "";

	return (
		<div className="sm:p-8 p-4 h-dvh">
			<Navbar />
			<div className="sm:py-8 py-4 flex sm:gap-y-8 gap-y-4 flex-col items-end">
				<p dangerouslySetInnerHTML={{ __html: formattedEmailData }}></p>
        <IconButton icon={<ContentCopySharp />}>COPY</IconButton>
			</div>
		</div>
	);
};

export default EmailPage;
