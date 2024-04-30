"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Hourglass as Spinner } from "react-loader-spinner";

interface IIconButton {
    icon?: any;
    isLoading?: boolean;
    color?: string;
    children?: React.ReactNode;
    width?: number;
    devider?: boolean | undefined;
    displayText?: boolean | undefined;
    className?: string;
    onClick?: React.MouseEventHandler;
}

const IconButton = (props: IIconButton) => {
    const [width, setWidth] = useState(200);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (window.innerWidth >= 650) {
            setWidth(props.width || width);
        } else {
            setWidth(props.width || width / 2);
        }
    });

    return (
        <button
            style={{
                backgroundColor: `${props.color || ""}`,
            }}
            onClick={props.onClick}
            className={`flex justify-center h-[42px] items-center gap-x-2 text-[14px] rounded-full transition-all bg-dark text-white dark:text-dark font-medium dark:bg-light px-6 ${props.className}`}
        >
            {props.isLoading ? (
                <Spinner
                    height={16}
                    colors={[
                        theme === "dark" ? "#000" : "#fff",
                        theme === "dark" ? "#000" : "#fff",
                    ]}
                    width={16}
                />
            ) : (
                <>
                    {props.icon && <span>{props.icon}</span>}
                    {props.devider &&
                    props.displayText &&
                    window.innerWidth >= 650 ? (
                        <span className="w-[2px] mx-2 h-[24px] rounded-full bg-[rgba(255,255,255,0.5)]"></span>
                    ) : (
                        ""
                    )}
                    <span
                        className={`sm:block ${props.displayText ? "" : "hidden"} font-normal`}
                    >
                        {props.children}
                    </span>
                </>
            )}
        </button>
    );
};

export default IconButton;
