"use client";

import TextField from "@/components/ui/input/TextField";
import React, { useState } from "react";
import IconButton from "@/components/ui/buttons/IconButton";
import { responderReceivedEmailStore } from "@/store/addOns/responder";
import { useAtom } from "jotai";

const ResponderForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    const [storedValue, setStoredValue] = useAtom(responderReceivedEmailStore);

    const handleOnClick = async () => {
        setIsLoading(true);

        // Store value in jotai store
        if (value.length <= 0) return;
        await setStoredValue(value);

        setIsLoading(false);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return setValue(event.target.value);
    };

    return (
        <div className="flex flex-col gap-y-8 items-center w-full">
            <p className="text-[26px] font-normal tracking-tight">
                {"Received email"}
            </p>
            <div className="w-full flex flex-col items-end gap-y-4 max-sm:p-4">
                <TextField
                    placeholder="Enter received mail here..."
                    onChange={handleOnChange}
                    value={value}
                    rows={10}
                    className="p-6 border-none bg-light-100 dark:bg-dark-100 rounded-2xl"
                />
                <IconButton
                    onClick={handleOnClick}
                    isLoading={isLoading}
                    color={value.length > 0 ? undefined : "#7f7f7f"}
                    displayText
                    className="max-sm:w-full"
                >
                    Generate reply
                </IconButton>
            </div>
        </div>
    );
};

export default ResponderForm;
