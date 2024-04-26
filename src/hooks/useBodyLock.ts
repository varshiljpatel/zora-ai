export enum OverflowSetting {
    Hidden = "hidden",
    Auto = "auto",
}

export const useBodyLock = (lock: boolean) => {
    return (document.body.style.overflow = lock
        ? OverflowSetting.Hidden
        : OverflowSetting.Auto);
};
