"use client";

import React, { useEffect, useState } from "react";
import ResponderForm from "./ResponderForm";
import { useAtom } from "jotai";
import { responderReceivedEmailStore as store } from "@/store/addOns/responder";
import { ISendResponseOptions } from "@/types/response/sendResponse";
import CopyButton from "@/components/ui/buttons/CopyButton";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

const ResponderAddOnPage: React.FC = () => {
    const [storedValue, setStoredValue] = useAtom(store);
    const [response, setResponse] = useState<string>("");
    const [copyResponse, setCopyResponse] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const res = await fetch("/api/add-ons/responder", {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({
                        received_email: storedValue,
                    }),
                });
                const data: ISendResponseOptions = await res.json();
                setCopyResponse((data.message as string) || "");

                let htmlData =
                    data.message
                        ?.toString()
                        .replace(/\n/g, "<br />")
                        .replaceAll("**", "") || "";

                let subjectEnd = htmlData.indexOf("<br />");

                setResponse(
                    `<p class="font-medium" >${htmlData.substring(0, subjectEnd)}</p>${htmlData.substring(subjectEnd).replace("<br /><br />", "<br />")}`
                );
                return setLoading(false);
            } catch (error) {
                setResponse("Error occurred while making API call" + error);
            }
            setStoredValue("");
        })();
    }, []);

    return (
        <>
            {storedValue !== "" ? (
                loading ? (
                    <div className="m-auto">
                        <LoadingAnimation />
                    </div>
                ) : (
                    <div className="w-full max-sm:p-4 py-4 flex flex-col gap-y-4 items-center justify-center">
                        <p className="text-[26px] tracking-tight">
                            {"Responder's response"}
                        </p>
                        <div className="flex flex-col items-end gap-y-4">
                            <div className="bg-light-100 dark:bg-dark-100 rounded-2xl p-6">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: response.trim(),
                                    }}
                                ></p>
                            </div>
                            <div className="sticky bottom-8 right-8">
                                <CopyButton text={copyResponse.toString()} />
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <ResponderForm />
            )}
        </>
    );
};

export default ResponderAddOnPage;
