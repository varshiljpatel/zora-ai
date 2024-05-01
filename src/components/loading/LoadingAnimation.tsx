"use client";

import React from "react";
import { Hourglass } from "react-loader-spinner";
import { useTheme } from "next-themes";

const LoadingAnimation = () => {
    return (
        <div className="flex gap-x-4 items-center justify-center w-full h-full">
            <Hourglass
                colors={[
                    useTheme().theme === "light" ? "#000000" : "#ffffff",
                    useTheme().theme === "light" ? "#000000" : "#ffffff",
                ]}
                height={24}
                width={24}
            />{" "}
            Loading...
        </div>
    );
};

export default LoadingAnimation;
