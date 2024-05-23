"use client";

import Logo from "@/assets/logo/Logo";
import { stringConfig } from "@/config/strings";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound404 = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.replace("/");
        }, 5000);
    });

    return (
        <div className="h-dvh p-8 w-full flex flex-col items-center justify-center gap-y-8">
            <span>
                <Logo
                    height={26}
                    color={useTheme().theme === "dark" ? "#fff" : "#000"}
                />
            </span>
            <h1 className="font-mono">
                <b className="text-[#FF0000]">Oops!</b> Page not found.
            </h1>
            <p className="text-center max-w-sm">
                {stringConfig.title} couldn&apos;t find the page you were
                looking for. {stringConfig.title} will redirects you to
                {" "}<b>/</b>{" "}
                <Link
                    href={"/"}
                    className="underline dark:text-primaryLight text-primaryDark underline-offset-4"
                >
                    Home
                </Link>{" "}
                page.
            </p>
        </div>
    );
};

export default NotFound404;
