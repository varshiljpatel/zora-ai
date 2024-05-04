"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Hourglass as Spinner } from "react-loader-spinner";

interface IButton {
    isLoading?: boolean;
    color?: string;
    children?: React.ReactNode;
    width?: number;
    className?: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: React.MouseEventHandler;
}

const Button = (props: IButton) => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={cn(
                "flex justify-center h-10 items-center rounded-full bg-[#004075] text-light dark:text-dark opacity-100 font-medium dark:bg-[#A8C8FA] px-6 hover:opacity-75 dark:hover:opacity-50",
                props.className
            )}
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
                    <span className="font-medium">{props.children}</span>
                </>
            )}
        </button>
    );
};

export default Button;
