"use client";

import React, { useEffect } from "react";
import IconButton from "@/components/ui/buttons/IconButton";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { stringConfig } from "@/config/strings";
import { LiteralUnion, signIn, useSession } from "next-auth/react";
import SquareLogo from "@/assets/logo/SquareLogo";
import { BuiltInProviderType } from "next-auth/providers/index";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const LoginPage = () => {
    const session = useSession();
    const router: AppRouterInstance = useRouter();

    useEffect(() => {
        if (session.status === "authenticated") {
            router.replace("/");
        }
    }, [session]);

    const handleSignin = async (
        sso: LiteralUnion<BuiltInProviderType>,
        options?: any
    ) => {
        await signIn(sso, options);
    };

    return (
        <div className="flex flex-col py-8 max-sm:px-4 items-center justify-center gap-y-16">
            <span className="mb-4">
                <SquareLogo height={42} />
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
                className="max-sm:w-full h-[42px]"
                devider={true}
                icon={<GoogleIcon height={26} />}
            >
                Sign in with Google
            </IconButton>
        </div>
    );
};

export default LoginPage;
