"use client";

import React, { useEffect, useState } from "react";
import IconButton from "@/components/ui/buttons/IconButton";
import { LogoutSharp } from "@mui/icons-material";
import SquareLogo from "@/assets/logo/SquareLogo";
import { stringConfig } from "@/config/strings";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const LogoutPage = () => {
    const [loading, setLoading] = useState(false);
    const session = useSession();
    const router = useRouter();

    const handleLogOut = async () => {
        setLoading(true);
        await signOut();
        setLoading(false);
        router.replace("/");
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            return router.back();
        }
        if (session.status === "unauthenticated") {
            return router.back();
        }
    }, [session, router]);

    return (
        <div className="flex flex-col h-full py-8 max-sm:px-4 items-center justify-center gap-y-16">
            <span className="mb-4">
                <SquareLogo
                    color={useTheme().theme === "dark" ? "#fff" : "#000"}
                    height={42}
                />
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
                isLoading={loading}
                className="max-sm:w-full h-[42px] dark:text-white"
                icon={<LogoutSharp fontSize="small" />}
                color="#f00"
                onClick={handleLogOut}
                displayText={true}
            >
                Log out
            </IconButton>
        </div>
    );
};

export default LogoutPage;
