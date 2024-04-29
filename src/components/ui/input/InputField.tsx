import React from "react";

interface IInputField {
    onChange: React.ChangeEventHandler;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    value: string | number | readonly string[] | undefined;
}

const InputField: React.FC<IInputField> = (props) => {
    return (
        <input
            value={props.value}
            type={props.type || "text"}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className="outline-none border-2 border-dark bg-transparent placeholder:text-dark text-dark rounded-none"
        />
    );
};

export default InputField;
