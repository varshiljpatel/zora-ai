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
            textarea.style.height =
                textarea.scrollHeight > 80 ? "auto" : "64px";
            const newHeight = Math.min(
                Math.max(
                    textarea.scrollHeight > 80 ? textarea.scrollHeight : 64,
                    64
                ),
                180
            );
            textarea.style.height = `${newHeight}px`;
        }
    };
    adjustTextareaHeight();

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

    useEffect(() => {
        adjustTextareaHeight();
    }, [promptValue]);

    return (
        <div className="relative w-full max-md:p-2 max-md:pt-0 flex gap-x-4 items-center sm:gap-x-8">
            <textarea
                ref={textareaRef}
                id="prommt"
                rows={1}
                value={promptValue}
                onChange={handleTextareaChange}
                placeholder="Enter mail purpose..."
                className="focus:border-dark p-6 flex flex-col justify-center outline-none blockScroll resize-none transition-all border-0 placeholder:text-dark dark:placeholder:text-neutral bg-light-100 dark:bg-dark-100 rounded-[32px] w-full"
            ></textarea>
            <IconButton
                icon={<Send fontSize="small" />}
                className={cn(
                    "max-sm:h-[48px] max-sm:absolute max-sm:bottom-4 max-sm:right-4 max-sm:p-0 max-sm:w-[48px]",
                    promptValue.length <= 0 ? "dark:bg-neutral bg-neutral" : ""
                )}
                onClick={handleOnClick}
                isLoading={isLoading}
            >
                SEND
            </IconButton>
            <span className="absolute w-full h-12 top-0 -translate-y-full left-0 right-0 bg-gradient-to-t from-light dark:from-background to-transparent"></span>
        </div>
    );
};

export default PromptArea;
