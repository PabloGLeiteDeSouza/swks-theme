import { useContext } from "react";
import { ThemeContext } from "../provider";
const useTheme = () => {
    const values = useContext(ThemeContext);
    return [
        values.theme,
        values.setTheme,
        values.toggleThemeDefault,
        values.toggleThemeCustom,
    ];
};

export default useTheme;