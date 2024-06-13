import React from "react";
import Suggestion from "./Suggestion";
import LoadingAnimation from "@/components/loading/LoadingAnimation";

const Suggestions = (props: {
    suggestions: string[];
    updateTextareaValue: (value: string) => void;
}) => {
    return (
        <div className="lg:w-4/6 w-full px-4 mb-8 max-md:px-2 rounded-[2rem] flex flex-col items-center sm:gap-y-6 gap-y-4">
            {props.suggestions.length != 0 ? (
                <>
                    <p className="text-[26px] tracking-tight text-center font-normal">
                        zora suggestions
                    </p>
                    <span className="w-20 mb-4 h-[2px] rounded-full bg-dark dark:bg-neutral"></span>
                </>
            ) : (
                <span className="py-8">
                    <LoadingAnimation />
                </span>
            )}

            {props.suggestions.map((suggestion, index) => {
                return (
                    <Suggestion
                        text={suggestion.trim().replace('"', "")}
                        updateTextareaValue={props.updateTextareaValue}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Suggestions;
