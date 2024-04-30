"use client";

import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { navList as nl } from "./navList";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSession } from "next-auth/react";

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
                text: session.status === "authenticated" ? "Log out" : "Log in",
                path: session.status === "authenticated" ? "/logout" : "login",
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
    }, [session.status]);

    return (
        <div className="flex items-center">
            {isBack ? (
                <span
                    onClick={handlePop}
                    className="cursor-pointer underline z-50 max-sm:ml-4 sm:mr-8 underline-offset-4"
                >
                    Back
                </span>
            ) : (
                ""
            )}
            {windowWidth >= 650 ? (
                <DesktopNavbar navList={navbarList} />
            ) : (
                <MobileNavbar navList={navbarList} />
            )}
        </div>
    );
};

export default Navbar;
