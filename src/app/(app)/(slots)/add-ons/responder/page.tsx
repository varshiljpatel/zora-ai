"use client";

import React, { useState } from "react";
import ResponderForm from "./ResponderForm";
import { useAtom } from "jotai";
import { responderReceivedEmailStore as store } from "@/store/addOns/responder";
import axios from "axios";
import { handleApiCall } from "./fetchData";

const ResponderAddOnPage: React.FC = () => {
    const [storedValue] = useAtom(store);
    const [response, setResponse] = useState<string>("");

    return (
        <div>
            {storedValue !== "" ? (
                <>
                    {handleApiCall(setResponse, storedValue)}{" "}
                    <div>{response}</div>{" "}
                </>
            ) : (
                <ResponderForm />
            )}
        </div>
    );
};

export default ResponderAddOnPage;
