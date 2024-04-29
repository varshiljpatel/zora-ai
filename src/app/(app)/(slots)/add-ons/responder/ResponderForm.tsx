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
        await setStoredValue(value);

        setIsLoading(false);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return setValue(event.target.value);
    };

    return (
        <div className="w-full flex flex-col items-end gap-y-4 max-sm:p-4">
            <TextField
                placeholder="Enter received mail here..."
                onChange={handleOnChange}
                value={value}
                rows={10}
                className="p-6 border-none bg-light-100 rounded-2xl"
            />
            <IconButton
                onClick={handleOnClick}
                isLoading={isLoading}
                displayText
                className="max-sm:w-full"
            >
                Generate reply
            </IconButton>
        </div>
    );
};

export default ResponderForm;
