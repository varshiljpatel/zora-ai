import React from "react";
import { Hourglass } from "react-loader-spinner";
import { useTheme } from "next-themes";

const LoadingAnimation = () => {
    return (
        <div className="flex gap-x-4 items-center justify-center w-full h-full">
            <Hourglass
                colors={[
                    useTheme().theme === "dark" ? "#fff" : "#000",
                    useTheme().theme === "dark" ? "#fff" : "#000",
                ]}
                height={24}
                width={24}
            />{" "}
            Loading...
        </div>
    );
};

export default LoadingAnimation;
