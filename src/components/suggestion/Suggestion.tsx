import React from "react";

const handleOnClick = (value: string) => value && value.trim();

const Suggestion = (props: {
    text: string;
    key: number;
    updateTextareaValue: (value: string) => void;
}) => {
    return (
        <div
            onClick={() => props.updateTextareaValue(props.text.trim())}
            key={props.key}
            className="min-h-20 cursor-pointer justify-center text-center flex items-center text-[16px] font-mono rounded-2xl border-2 sm:p-8 sm:py-4 p-4 px-8 py-2 w-full bg-light border-dark"
        >
            <p key={props.key} className="cursor-pointer">
                {props.text}
            </p>
        </div>
    );
};

export default Suggestion;
