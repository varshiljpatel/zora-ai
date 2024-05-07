"use client";

import Vec1 from "@/assets/vectors/Vec1";
import Suggestions from "@/components/suggestion/Suggestions";
import Navbar from "@/components/navbar/Navbar";
import PromptArea from "@/components/prompt/PromptArea";
import { useEffect, useState } from "react";
import SquareLogo from "@/assets/logo/SquareLogo";
import { useTheme } from "next-themes";

export default function Home() {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [textareaValue, setTextareaValue] = useState("");
    const updateTextareaValue = (value: string) => setTextareaValue(value);

    useEffect(() => {
        (async () => {
            const suggestionData = await fetch("/api/suggestions", {
                method: "GET",
                cache: "no-store",
            });
            let suggestionsResponse = await suggestionData.json();
            let tunedSuggestions: string = await String(
                suggestionsResponse.message
            )
                .replace(`"`, ``)
                .trim();
            let suggestionsArray: string[] = tunedSuggestions.split("||");
            setSuggestions(suggestionsArray);
        })();
        return;
    }, []);

    return (
        <div className="h-dvh flex flex-col justify-between p-4">
            <Navbar />
            <div
                style={scrollnone}
                className="w-full h-full overflow-scroll scroll-smooth flex"
            >
                <div className="w-full mx-4 mt-20 m-auto flex flex-col items-center gap-y-0">
                    {/*<Vec1 height={200} />*/}
                    <span className="flex items-center justify-center p-4 bg-dark dark:bg-light rounded-full">
                        <SquareLogo
                            color={
                                useTheme().theme === "light"
                                    ? "#ffffff"
                                    : "#000000"
                            }
                            height={30}
                        />
                    </span>
                    <Suggestions
                        suggestions={suggestions}
                        updateTextareaValue={updateTextareaValue}
                    />
                </div>
            </div>
            <PromptArea value={textareaValue} />
        </div>
    );
}

const scrollnone: React.CSSProperties = {
    scrollbarWidth: "none",
};
