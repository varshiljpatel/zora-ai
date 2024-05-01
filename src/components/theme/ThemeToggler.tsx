"use client";

import { EnumThemes } from "@/types/theme";
import { DarkModeOutlined, LightModeSharp } from "@mui/icons-material";
import { useTheme } from "next-themes";
import React from "react";

// interface IThemeToggler {
//     theme?: string;
//     setTheme: React.Dispatch<React.SetStateAction<string>>;
// }

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return theme === "light" ? (
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
