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
        <div className="flex flex-col py-8 max-sm:px-4 items-center justify-center gap-y-16">
            <span className="mb-4">
                <SquareLogo
                    color={useTheme().theme === "dark" ? "#fff" : "#000"}
                    height={42}
                />
            </span>
            <div className="flex flex-col gap-y-2 sm:max-w-md">
                <p className="text-center text-[42px] font-normal tracking-tight">
                    {"Log in"}
                </p>
                <p className="text-center">
                    {stringConfig.loginDescription() as string}
                </p>
            </div>
            <IconButton
                onClick={() => handleSignin("google")}
                displayText={true}
                isLoading={loading}
                className="max-sm:w-full h-[42px]"
                icon={<GoogleIcon />}
            >
                Sign in with Google
            </IconButton>
        </div>
    );
};

export default LoginPage;
