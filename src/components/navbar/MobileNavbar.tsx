"use client";

import React, { useState } from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useBodyLock } from "@/hooks/useBodyLock";

const MobileNavbar = (props: {
    navList: { text: string; path?: string }[];
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleOnClick = async () => {
        await setIsVisible(!isVisible);
    };

    useBodyLock(isVisible);

    return (
        <>
            <div
                className={`flex z-50 relative font-medium w-full justify-between items-center p-4 pt-0`}
            >
                <Link href={"/"} onClick={() => setIsVisible(false)}>
                    <Logo height={26} color="#000000" />
                </Link>
                <button
                    onClick={handleOnClick}
                    className="underline underline-offset-4 font-medium"
                >
                    {isVisible ? "Close" : "Menu"}
                </button>
            </div>
            <div
                className={`w-full absolute top-0 bottom-0 right-0 left-0 z-10 bg-light flex flex-col items-start gap-y-6 p-8 pt-24 rounded-b-2xl ${
                    isVisible ? "block" : "h-0 hidden"
                }`}
            >
                {props.navList.map((navItem, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full border-b-2 border-dotted border-black pb-0.5"
                        >
                            <NavItem
                                onClick={() => setIsVisible(false)}
                                text={navItem.text}
                                path={navItem.path}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const NavItem = (props: {
    text: string;
    path?: Url;
    className?: string;
    onClick?: React.MouseEventHandler;
}) => {
    return (
        <>
            {props.path ? (
                <Link
                    onClick={props.onClick}
                    href={props.path}
                    className={`${props.className}`}
                >
                    {props.text}
                    {/*<CallMadeSharp fontSize="small" />*/}
                </Link>
            ) : (
                <span className={props.className}>{props.text}</span>
            )}
        </>
    );
};

export default MobileNavbar;
