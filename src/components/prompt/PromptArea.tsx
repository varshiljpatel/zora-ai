"use client";

import React, { useEffect, useState } from "react";
import IconButton from "../ui/buttons/IconButton";
import Send from "@mui/icons-material/SendSharp";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const PromptArea = (props: { value: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [promptValue, setPromptValue] = useState(props.value || "");
    let router: AppRouterInstance = useRouter();

    const handleOnClick = async () => {
        if (promptValue.length <= 0) return;

        try {
            setIsLoading(true);
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
            await router.push("/email");
            setIsLoading(false);
        } catch (error: any) {
            console.error("Error:", error.message);
            setIsLoading(false);
        }
    };

    const handleTextareaChange: React.ChangeEventHandler = (event: any) => {
        setPromptValue(event.target.value);
    };

    useEffect(() => {
        setPromptValue(props.value);
    }, [props.value]);

    return (
        <div className="relative w-full p-4 flex gap-x-4 sm:gap-x-8">
            <textarea
                id="prommt"
                value={promptValue}
                onChange={handleTextareaChange}
                rows={3}
                placeholder="Enter email purpose here..."
                className="focus:border-dark focus:border-2 outline-none resize-none transition-all border-0 p-4 py-2 placeholder:text-dark bg-light-100 rounded-2xl max-sm:min-h-32 min-h-24 w-full"
            ></textarea>
            <IconButton
                icon={<Send fontSize="small" />}
                className="max-sm:absolute max-sm:bottom-4 max-sm:right-4"
                color={promptValue.trim().length > 0 ? undefined : "#7f7f7f"}
                onClick={handleOnClick}
                isLoading={isLoading}
            >
                SEND
            </IconButton>
        </div>
    );
};

export default PromptArea;
