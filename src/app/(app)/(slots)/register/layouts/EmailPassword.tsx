"use client";

import SquareLogo from "@/assets/logo/SquareLogo";
import Button from "@/components/ui/buttons/Button";
import InputField from "@/components/ui/input/InputField";
import { stringConfig } from "@/config/strings";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EmailPassword = (props: { onNext: (data: any) => void }) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        setLoading(true);
        await props.onNext(data);
        setLoading(false);
    };

    return (
        <>
            <div className="flex flex-col gap-y-2 sm:max-w-md">
                <p className="text-center text-[2rem] font-normal tracking-tight">
                    {"Sign up"}
                </p>
                <p className="text-center opacity-50">
                    {stringConfig.registerDescription() as string}
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg items-end flex flex-col gap-y-4 w-full"
            >
                <InputField
                    other={register("email", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                    type="text"
                    placeholder="Enter email here"
                />
                <InputField
                    other={register("password", {
                        min: 8,
                        required: true,
                    })}
                    type="password"
                    placeholder="Enter password here"
                />
                <Button type="submit" isLoading={loading} className="mt-4">
                    Next
                </Button>
            </form>
        </>
    );
};

export default EmailPassword;
