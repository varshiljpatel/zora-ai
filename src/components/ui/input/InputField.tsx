import React from "react";
import { ForwardedRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputField {
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    value?: string | number | readonly string[] | undefined;
    other?: UseFormRegisterReturn<string>;
}

const InputField: React.FC<IInputField> = (props) => {
    return (
        <input
            value={props.value}
            type={props.type || "text"}
            placeholder={props.placeholder}
            onChange={props.onChange}
            {...props.other}
            className={`outline-none border-2 border-neutral dark:border-base focus:border-primaryDark 
            dark:focus:border-primaryLight w-full font-mono placeholder:text-neutral h-[60px] dark:text-light bg-transparent text-dark rounded-sm px-4 ${props.className}`}
        />
    );
};

export default InputField;
