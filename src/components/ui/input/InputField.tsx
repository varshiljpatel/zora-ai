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
            className={`outline-none border-2 border-dark dark:border-base dark:focus:border-light w-full dark:placeholder:text-neutral h-[42px] dark:text-light bg-transparent placeholder:text-dark text-dark rounded-none px-4 ${props.className}`}
        />
    );
};

export default InputField;
