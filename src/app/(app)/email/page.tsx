"use client";

import Navbar from "@/components/navbar/Navbar";
import IconButton from "@/components/ui/buttons/IconButton";
import { ContentCopySharp, CopyAllSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import CopyButton from "../../../components/ui/buttons/CopyButton";
import { Hourglass } from "react-loader-spinner";

const EmailPage = () => {
	const [email, setEmail] = useState("");
	const [htmlEmail, setHtmlEmail] = useState("");

	useEffect(() => {
		const emailData =
			typeof window !== undefined
				? localStorage.getItem("email-data")
				: "";
		setEmail(emailData || "");

		// Parse in html
		let htmlemailData = emailData ? emailData.replace(/\n/g, "<br />") : "";

		// Find first br for subject: <br />
		let subjectEnd = htmlemailData.indexOf("<br />");

		// Join html elements
		setHtmlEmail(`<p class="font-semibold" >${htmlemailData.substring(0, subjectEnd)}</p>${htmlemailData.substring(subjectEnd)}`);
	}, []);

	return (
		<div className="sm:p-8 p-4 h-dvh">
			<Navbar isBack={true} />
			{email === "" ? (
				<div className="flex gap-x-4 items-center justify-center w-full h-full">
					<Hourglass
						colors={["#000000", "#000000"]}
						height={24}
						width={24}
					/>{" "}
					Loading...
				</div>
			) : (
				<></>
			)}
			<div className="py-8 p-4 flex sm:gap-y-8 gap-y-4 flex-col items-end">
				<div className="border-l-2 border-dark pl-4 w-full">
					<p
						dangerouslySetInnerHTML={{
							__html: htmlEmail,
						}}
					></p>
				</div>
				{email !== "" ? (
					<div className="sticky bottom-8 right-4">
						<CopyButton text={email} />
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default EmailPage;
