import React from "react";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import OutlineButton from "../ui/buttons/OutlineButton";
import ThemeToggler from "../theme/ThemeToggler";
import { useTheme } from "next-themes";

const DesktopNavbar = (props: {
    navList: {
        text: string;
        path?: string;
    }[];
}) => {
    return (
        <div className="flex w-full justify-between items-center">
            <Link href={"/"}>
                <Logo
                    height={26}
                    color={useTheme().theme === "dark" ? "#ffffff" : "#000000"}
                />
            </Link>
            <ul className="flex gap-x-8 font-medium items-center">
                {props.navList.map((navItem, index) => (
                    <>
                        <li>
                            <Link href={navItem.path || ""}>
                                {navItem.text}
                            </Link>
                        </li>
                    </>
                ))}
                <ThemeToggler />
                <Link href={"/add-ons"}>
                    <OutlineButton>Add ons</OutlineButton>
                </Link>
            </ul>
        </div>
    );
};

export default DesktopNavbar;
