import React from "react";
import { Hourglass } from "react-loader-spinner";

const LoadingAnimation = () => {
    return (
        <div className="flex gap-x-4 items-center justify-center w-full h-full">
            <Hourglass colors={["#000000", "#000000"]} height={24} width={24} />{" "}
            Loading...
        </div>
    );
};

export default LoadingAnimation;
