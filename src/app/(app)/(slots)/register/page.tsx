"use client";

import React, { useEffect, useState } from "react";
import IconButton from "@/components/ui/buttons/IconButton";
import { stringConfig } from "@/config/strings";
import SquareLogo from "@/assets/logo/SquareLogo";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import InputField from "@/components/ui/input/InputField";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const router: AppRouterInstance = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {});

    const handleRegister = async () => {
        setLoading(true);
        // Register user here...
        setLoading(false);
    };

    return (
        <div className="flex flex-col h-full py-8 max-sm:px-4 items-center justify-center gap-y-12">
            <span>
                <SquareLogo
                    color={useTheme().theme === "dark" ? "#fff" : "#000"}
                    height={42}
                />
            </span>
            <div className="flex flex-col gap-y-2 sm:max-w-md">
                <p className="text-center text-[42px] font-normal tracking-tight">
                    {"Sign up"}
                </p>
                <p className="text-center">
                    {stringConfig.registerDescription() as string}
                </p>
            </div>
            <section className="max-w-lg items-end flex flex-col gap-y-6 w-full">
                <InputField
                    onChange={() => {}}
                    value={""}
                    type="text"
                    placeholder="Enter email here"
                />
                <InputField
                    onChange={() => {}}
                    value={""}
                    type="password"
                    placeholder="Enter password here"
                />
                <IconButton
                    onClick={handleRegister}
                    displayText={true}
                    isLoading={loading}
                    className="max-md:w-full mt-4"
                >
                    Register
                </IconButton>
            </section>
        </div>
    );
};

export default LoginPage;
