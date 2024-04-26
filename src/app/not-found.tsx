"use client";

import Logo from "@/assets/logo/Logo";
import { stringConfig } from "@/config/strings";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound404 = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 2000);
    });

    return (
        <div className="h-dvh p-8 w-full flex flex-col items-center justify-center gap-y-8">
            <span>
                <Logo height={26} />
            </span>
            <h1 className="font-mono">Oops! Page not found.</h1>
            <p className="text-center">
                {stringConfig.title} couldn&apos;t find the page you were
                looking for. {stringConfig.title} will redirects you to
                &quot;/&quot;{" "}
                <Link
                    href={"/"}
                    className="font-medium underline underline-offset-4"
                >
                    Home
                </Link>{" "}
                page.
            </p>
        </div>
    );
};

export default NotFound404;
