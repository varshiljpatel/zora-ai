"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Hourglass as Spinner } from "react-loader-spinner";

interface IIconButton {
    icon?: any;
    isLoading?: boolean;
    color?: string;
    children?: React.ReactNode;
    width?: number;
    divider?: boolean | undefined;
    displayText?: boolean | undefined;
    className?: string;
    onClick?: React.MouseEventHandler;
}

const IconButton = (props: IIconButton) => {
    const [width, setWidth] = useState(200);
    const [themeValue, setThemeValue] = useState<string>("");
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setThemeValue(theme!);
        if (window.innerWidth >= 650) {
            setWidth(props.width || width);
        } else {
            setWidth(props.width || width / 2);
        }
    }, [width, props.width, theme]);

    return (
        <button
            onClick={props.onClick}
            className={cn(
                "flex justify-center gap-x-2 h-12 items-center font-medium text-[1rem] rounded-full transition-all bg-primaryDark text-white dark:text-dark dark:bg-primaryLight px-6",
                props.className
            )}
        >
            {props.isLoading ? (
                <span className="flex items-center justify-center">
                    <Spinner
                        height={16}
                        colors={[
                            themeValue === "dark" ? "#000" : "#fff",
                            themeValue === "dark" ? "#000" : "#fff",
                        ]}
                        width={16}
                    />
                </span>
            ) : (
                <>
                    {props.icon && (
                        <span className="flex items-center justify-center">
                            {props.icon}
                        </span>
                    )}
                    {props.divider &&
                    props.displayText &&
                    window.innerWidth >= 650 ? (
                        <span className="w-[2px] mx-2 h-[24px] rounded-full bg-[rgba(255,255,255,0.5)]"></span>
                    ) : (
                        ""
                    )}
                    <span
                        className={`md:block ${props.displayText ? "" : "hidden"} font-medium`}
                    >
                        {props.children}
                    </span>
                </>
            )}
        </button>
    );
};

export default IconButton;
