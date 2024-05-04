"use client";

import Button from "@/components/ui/buttons/Button";
import InputField from "@/components/ui/input/InputField";
import { stringConfig } from "@/config/strings";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MobileNo = (props: {
    onNext: (data: any) => void;
    onPrev: () => void;
    formData: {};
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
                    {"Contact"}
                </p>
                <p className="text-center opacity-50">
                    {"Enter business's contact number to below visible input box for personalized " +
                        stringConfig.title +
                        " responses."}
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg items-end flex flex-col gap-y-6 w-full"
            >
                <InputField
                    other={register("number", {
                        required: true,
                        pattern: {
                            value: /^[\d ()+-]+$/,
                            message: "Invalid phone number format",
                        },
                    })}
                    type="text"
                    placeholder="Enter business's contact number"
                />
                <Button
                    type="submit"
                    isLoading={loading}
                    className="mt-4"
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default MobileNo;
