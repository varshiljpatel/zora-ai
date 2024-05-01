"use client";

import React from "react";

const SquareLogo = (props: {
    color?: string;
    height?: number;
    width?: number;
}) => {
    return (
        <svg
            id="Layer_1"
            fill={props.color || "rgb(0, 0, 0)"}
            data-name="Layer 1"
            height={props.height || 42}
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 59 59"
        >
            <path
                d="M652,397H593V338h59Zm-56.73-2.27h54.46V340.27H595.27Z"
                transform="translate(-593 -338)"
            />
            <polygon points="1.81 58.77 0.33 57.06 45.77 11.62 1.81 44.59 0.45 42.77 57.19 0.23 58.67 1.94 13.23 47.38 57.19 14.41 58.55 16.23 1.81 58.77" />
            <polygon points="1.64 30.52 0.63 28.48 48.11 4.74 1.41 16.42 0.86 14.22 57.59 0.03 58.37 2.15 1.64 30.52" />
            <polygon points="1.41 58.97 0.63 56.85 57.36 28.48 58.37 30.52 10.89 54.26 57.59 42.58 58.14 44.78 1.41 58.97" />
        </svg>
    );
};

export default SquareLogo;
