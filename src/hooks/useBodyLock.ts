"use client";

import { useEffect } from "react";

export enum OverflowSetting {
    Hidden = "hidden",
    Auto = "auto",
}

export const useBodyLock = (lock: boolean) => {
    useEffect(() => {
        document.body.style.overflow = lock
            ? OverflowSetting.Hidden
            : OverflowSetting.Auto;

        return () => {
            document.body.style.overflow = OverflowSetting.Auto;
        };
    }, [lock]);
};
