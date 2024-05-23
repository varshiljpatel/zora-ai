"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useBodyLock } from "@/hooks/useBodyLock";
import ThemeToggler from "../theme/ThemeToggler";
import { useTheme } from "next-themes";

const MobileNavbar = (props: {
    navList: { text: string; path?: string }[];
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [themeValue, setThemeValue] = useState<string>("");
    const { theme } = useTheme();

    useEffect(() => {
        setThemeValue(theme!);
    }, [theme]);

    const handleOnClick = async () => {
        await setIsVisible(!isVisible);
    };

    useBodyLock(isVisible);

    return (
        <>
            <div
                className={`flex z-50 relative font-medium w-full justify-between items-center p-4`}
            >
                <Link href={"/"} onClick={() => setIsVisible(false)}>
                    <Logo
                        height={26}
                        color={themeValue === "light" ? "#000000" : "#ffffff"}
                    />
                </Link>
                <div className="flex items-center gap-x-6">
                    <ThemeToggler />
                    <button
                        onClick={handleOnClick}
                        className="underline underline-offset-4 font-medium"
                    >
                        {isVisible ? "Close" : "Menu"}
                    </button>
                </div>
            </div>
            <div
                className={`w-full absolute top-0 bottom-0 right-0 left-0 z-10 bg-light dark:bg-background flex flex-col items-start gap-y-8 p-8 pt-24 rounded-b-2xl ${
                    isVisible ? "block" : "h-0 hidden"
                }`}
            >
                {props.navList.map((navItem, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full border-b-2 border-dotted dark:border-light border-dark pb-0.75"
                        >
                            <NavItem
                                onClick={() => setIsVisible(false)}
                                text={navItem.text}
                                path={navItem.path}
                            />
                        </div>
                    );
                })}
                <Link href={"/add-ons"} className="w-full">
                    <div className="w-full border border-dark dark:border-primaryLight rounded-full flex items-center justify-center h-[42px]">
                        {"Add ons"}
                    </div>
                </Link>
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
