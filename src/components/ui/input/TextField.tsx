import React from "react";

interface ITextField {
    onChange: React.ChangeEventHandler;
    placeholder?: string;
    value: string | number | readonly string[] | undefined;
    className?: string;
    rows?: number;
}

const TextField: React.FC<ITextField> = (props) => {
    return (
        <textarea
            value={props.value}
            rows={props.rows || 3}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className={`resize-none w-full p-4 outline-none border-2 border-dark rounded-xl dark:border-light placeholder:text-[#7f7f7f] dark:text-light text-dark ${props.className}`}
        />
    );
};

export default TextField;
