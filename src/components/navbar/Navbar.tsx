"use client";

import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { navList as nl } from "./navList";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSession } from "next-auth/react";
import { stringConfig } from "@/config/strings";

interface INavbar {
    isBack?: boolean;
}

const Navbar = (props: INavbar) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isBack, setIsBack] = useState(false);
    const session = useSession();
    const [navbarList, setNavbarList] = useState<
        {
            text: string;
            path?: string;
        }[]
    >([]);
    const router: AppRouterInstance = useRouter();

    const handlePop = () => {
        router.back();
    };

    useEffect(() => {
        setNavbarList([
            ...nl,
            {
                text:
                    session.status === "authenticated" ||
                    localStorage.getItem(stringConfig.localStorageToken)
                        ? "Log out"
                        : "Log in",
                path:
                    session.status === "authenticated" ||
                    localStorage.getItem(stringConfig.localStorageToken)
                        ? "/logout"
                        : "/login",
            },
        ]);

        setWindowWidth(window.innerWidth);
        setIsBack(props.isBack || false);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [session.status, props.isBack]);

    return (
        <div className="flex items-center">
            {isBack ? (
                <span
                    onClick={handlePop}
                    className="cursor-pointer underline z-50 max-sm:ml-4 lg:mr-8 underline-offset-4"
                >
                    Back
                </span>
            ) : (
                ""
            )}
            {windowWidth >= 1080 ? (
                <DesktopNavbar navList={navbarList} />
            ) : (
                <MobileNavbar navList={navbarList} />
            )}
        </div>
    );
};

export default Navbar;
