"use client";

import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import CopyButton from "@/components/ui/buttons/CopyButton";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

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
        setHtmlEmail(
            `<p class="font-medium" >${htmlemailData.substring(0, subjectEnd)}</p>${htmlemailData.substring(subjectEnd).replace("<br /><br />", "<br />")}`
        );
    }, []);

    return (
        <div className="h-full">
            {email === "" ? <LoadingAnimation /> : <></>}
            <div className="py-8 max-sm:p-4 flex gap-y-8 flex-col items-end">
                <div className="bg-light-100 dark:bg-dark-100 rounded-2xl p-6 w-full">
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
