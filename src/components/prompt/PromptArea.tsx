"use client";

import React, { useEffect, useRef, useState } from "react";
import IconButton from "../ui/buttons/IconButton";
import Send from "@mui/icons-material/SendSharp";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { cn } from "@/lib/utils";

const PromptArea = (props: { value: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [promptValue, setPromptValue] = useState(props.value || "");
    let router: AppRouterInstance = useRouter();
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };
    adjustTextareaHeight();

    const handleOnClick = async () => {
        if (promptValue.length <= 0) return;

        setIsLoading(true);
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

    useEffect(() => {
        adjustTextareaHeight();
    }, [promptValue]);

    return (
        <>
            <div
                className={cn(
                    "w-full relative rounded-[40px] md:p-4 p-2 flex gap-x-2 justify-between items-end md:gap-x-4 min-h-16 bg-light-100 flex-none dark:bg-dark-100 max-h-44",
                    promptValue.length > 0 ? "dark:bg-dark-300" : ""
                )}
            >
                <span className="w-full top-0 -translate-y-full absolute h-12 bg-gradient-to-t from-light dark:from-background to-transparent"></span>
                <textarea
                    ref={textareaRef}
                    id="prompt"
                    rows={1}
                    value={promptValue}
                    onChange={handleTextareaChange}
                    placeholder="Enter email purpose..."
                    className="overflow-y-auto outline-none blockScroll p-4 py-2 resize-none transition-all border-0 placeholder:text-dark min-h-full dark:placeholder:text-neutral bg-transparent w-full max-h-full"
                ></textarea>
                <IconButton
                    icon={<Send fontSize="small" />}
                    className={cn(
                        "w-12 gap-x-0",
                        promptValue.length <= 0
                            ? "dark:bg-neutral bg-neutral"
                            : ""
                    )}
                    onClick={handleOnClick}
                    isLoading={isLoading}
                />
            </div>
        </>
    );
};

export default PromptArea;
