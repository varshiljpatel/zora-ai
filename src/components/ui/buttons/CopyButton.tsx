"use client";

import React, { useState } from "react";
import IconButton from "./IconButton";
import { ContentCopySharp, DoneSharp } from "@mui/icons-material";
import copy from "copy-to-clipboard";

interface ICopyButton {
    text: string | any;
}

const CopyButton = (props: ICopyButton) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleClick: React.MouseEventHandler = async () => {
        if (isCopied) return;
        await copy(props.text, {
            format: "text/plain",
        });
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
        return;
    };

    return (
        <>
            <IconButton
                divider={true}
                onClick={handleClick}
                icon={
                    isCopied ? (
                        <DoneSharp fontSize="small" />
                    ) : (
                        <ContentCopySharp fontSize="small" />
                    )
                }
            >
                {isCopied ? "COPIED" : "COPY"}
            </IconButton>
        </>
    );
};

export default CopyButton;
