"use client";

import React, { useEffect, useState } from "react";
import IconButton from "@/components/ui/buttons/IconButton";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { stringConfig } from "@/config/strings";
import { LiteralUnion, signIn, useSession } from "next-auth/react";
import SquareLogo from "@/assets/logo/SquareLogo";
import { BuiltInProviderType } from "next-auth/providers/index";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useTheme } from "next-themes";
import Link from "next/link";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const session = useSession();
    const router: AppRouterInstance = useRouter();

    useEffect(() => {
        if (
            localStorage.getItem(stringConfig.localStorageToken) ||
            session.status === "authenticated"
        ) {
            return router.replace("/");
        }
    }, [session.status, router]);

    const handleSignin = async (
        sso: LiteralUnion<BuiltInProviderType>,
        options?: any
    ) => {
        setLoading(true);
        await signIn(sso, options);
        if (session.status === "authenticated" || session.data) {
            // Perform sso login task here
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col h-full py-8 max-sm:px-4 items-center justify-center gap-y-12">
            <div className="flex flex-col gap-y-2 sm:max-w-md">
                <p className="text-center text-[2rem] font-normal tracking-tight">
                    {"Log in"}
                </p>
                <p className="text-center opacity-50">
                    {stringConfig.loginDescription() as string}
                </p>
            </div>
            <section className="w-full flex flex-col items-center justify-center">
                <IconButton
                    onClick={() => handleSignin("google")}
                    displayText={true}
                    isLoading={loading}
                    color="white"
                    className="max-sm:w-full h-[42px] bg-primaryDark dark:bg-light-100"
                    icon={<GoogleIcon />}
                >
                    Sign in with Google
                </IconButton>
                <p className="mt-4 items-center justify-center">
                    {"Don&apos;t have an account"}{" "}
                    <Link
                        href={"/register"}
                        className="opacity-100 text-primaryDark dark:text-primaryLight underline"
                    >
                        {"Sign up"}
                    </Link>
                </p>
            </section>
        </div>
    );
};

export default LoginPage;
