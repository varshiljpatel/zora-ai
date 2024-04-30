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

    return theme === "dark" ? (
        <span onClick={() => setTheme(EnumThemes.Light)}>
            <LightModeSharp />
        </span>
    ) : (
        <span onClick={() => setTheme(EnumThemes.Dark)}>
            <DarkModeOutlined />
        </span>
    );
};

export default ThemeToggler;
