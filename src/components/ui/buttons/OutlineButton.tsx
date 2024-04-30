import React from "react";

interface IOutlineButton {
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
}

const handleOnClick = () => {};

const OutlineButton = (props: IOutlineButton) => {
    return (
        <button
            className="h-[36px] border-[2px] rounded-full px-4 border-dark dark:border-light"
            onClick={props.onClick || handleOnClick}
        >
            {props.children}
        </button>
    );
};

export default OutlineButton;
