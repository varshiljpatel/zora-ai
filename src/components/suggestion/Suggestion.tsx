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
            className="min-h-20 transition duration-300 ease-in-out cursor-pointer justify-center text-center flex items-center text-[16px] font-mono rounded-xl sm:p-8 sm:py-4 p-4 py-2 w-full hover:bg-light-200 bg-light-100 dark:hover:bg-base dark:bg-dark-100"
        >
            <p key={props.key} className="cursor-pointer opacity-75">
                {props.text}
            </p>
        </div>
    );
};

export default Suggestion;
