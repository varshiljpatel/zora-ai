"use client";

import Button from "@/components/ui/buttons/Button";
import InputField from "@/components/ui/input/InputField";
import { stringConfig } from "@/config/strings";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BusinessName = (props: {
    onNext: (data: any) => void;
    onPrev: () => void;
}) => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);
        await props.onNext(data);
        setLoading(false);
    };

    return (
        <>
            <div className="flex flex-col gap-y-2 sm:max-w-md">
                <p className="text-center text-[2rem] font-normal tracking-tight">
                    {"Business"}
                </p>
                <p className="text-center opacity-50">
                    {"Enter your business name to below visible input box for personalized " +
                        stringConfig.title +
                        " responses."}
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg items-end flex flex-col gap-y-6 w-full"
            >
                <InputField
                    other={register("businessName", {
                        required: true,
                    })}
                    type="text"
                    placeholder="Enter business name here"
                />
                <Button type="submit" isLoading={loading} className="mt-4">
                    Next
                </Button>
            </form>
        </>
    );
};

export default BusinessName;
