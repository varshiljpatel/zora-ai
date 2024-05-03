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
        if (session.status === "authenticated") {
            router.replace("/");
        }
    }, [session.status]);

    const handleSignin = async (
        sso: LiteralUnion<BuiltInProviderType>,
        options?: any
    ) => {
        setLoading(true);
        await signIn(sso, options);
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
                    className="max-sm:w-full h-[42px] "
                    icon={<GoogleIcon />}
                >
                    Sign in with Google
                </IconButton>
                <span className="mt-4 flex gap-2 items-center justify-center">
                    <p className="opacity-50">Don&apos;t have an account</p>{" "}
                    <Link href={"/register"} className="opacity-100 underline">
                        Sign up
                    </Link>
                </span>
            </section>
        </div>
    );
};

export default LoginPage;
