"use client";

import React, { useEffect } from "react";
import IconButton from "@/components/ui/buttons/IconButton";
import { LogoutSharp } from "@mui/icons-material";
import SquareLogo from "@/assets/logo/SquareLogo";
import { stringConfig } from "@/config/strings";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
    const session = useSession();
    const router = useRouter();

    const handleLogOut = async () => {
        await signOut();
        router.replace("/");
    };

    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.back();
        }
    }, [session]);

    return (
        <div className="flex flex-col py-8 max-sm:px-4 items-center justify-center gap-y-16">
            <span className="mb-4">
                <SquareLogo height={42} />
            </span>
            <div className="flex flex-col gap-y-2 sm:max-w-md">
                <p className="text-center text-[42px] font-normal tracking-tight">
                    {"Log out"}
                </p>
                <p className="text-center">
                    {`Log out from ${stringConfig.title}. You will log in any time and any where whenever you want after log out.`}
                </p>
            </div>
            <IconButton
                className="max-sm:w-full h-[42px]"
                icon={<LogoutSharp />}
                color="#f00"
                onClick={handleLogOut}
                displayText={true}
                devider={true}
            >
                Log out
            </IconButton>
        </div>
    );
};

export default LogoutPage;
