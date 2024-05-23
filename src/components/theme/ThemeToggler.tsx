"use client";

import { EnumThemes } from "@/types/theme";
import { DarkModeOutlined, LightModeSharp } from "@mui/icons-material";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [themeValue, setThemeValue] = useState<string>("");

    useEffect(() => {
        setThemeValue(theme!);
    }, [theme]);

    return themeValue === "light" ? (
        <span onClick={() => setTheme(EnumThemes.Dark)}>
            <DarkModeOutlined />
        </span>
    ) : (
        <span onClick={() => setTheme(EnumThemes.Light)}>
            <LightModeSharp />
        </span>
    );
};

export default ThemeToggler;
