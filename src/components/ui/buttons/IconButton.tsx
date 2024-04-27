"use client";

import React, { useEffect, useState } from "react";
import { Hourglass as Spinner } from "react-loader-spinner";

interface IIconButton {
    icon?: any;
    isLoading?: boolean;
    color?: string;
    children?: React.ReactNode;
    width?: number;
    className?: string;
    onClick?: React.MouseEventHandler;
}

const IconButton = (props: IIconButton) => {
    const [width, setWidth] = useState(200);

    useEffect(() => {
        if (window.innerWidth >= 650) {
            setWidth(props.width || width);
        } else {
            setWidth(props.width || width / 2);
        }
    }, []);

    return (
        <button
            style={{ backgroundColor: `${props.color || "rgb(0, 0, 0)"}`, transition: "width 0.5s ease-in-out" }}
            onClick={props.onClick}
            className={`justify-center h-[42px] flex items-center gap-x-2 text-[14px] rounded-full transition-all text-white font-medium px-6 bg-dark ${props.className}`}
        >
            {props.isLoading ? (
                <Spinner
                    height={16}
                    colors={["#ffffff", "#ffffff"]}
                    width={16}
                />
            ) : (
                <>
                    {props.icon && <span>{props.icon}</span>}
                    <span className="sm:block hidden">{props.children}</span>
                </>
            )}
        </button>
    );
};

export default IconButton;
