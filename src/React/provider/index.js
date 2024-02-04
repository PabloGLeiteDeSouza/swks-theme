const { createContext, useState } = require("react");
const React = require("react");

const ThemeContext = createContext({
    setTheme: (theme) => {},
    toggleThemeDefault: () => {},
    toggleThemeCustom: ( ...themes) => {},
    theme: "default",
    local_stg_key: "theme",
    dom_attr_key: "data-theme",
    DefaultTheme: "default",
    options: {
        toggleThemeDefault: {
            type: "attribute",
            value: "data-toggle-theme-default",
        },
        toggleThemeCustom: {
            type: "attribute",
            value: "data-toggle-theme-custom",
        },
        chooseTheme: { type: "attribute", value: "data-choose-theme" },
        setTheme: { type: "attribute", value: "data-set-theme" },
        chooseTheme: { type: "attribute", value: "data-choose-theme" },
    },
});

// type options = {
//     dom_attr_key?: string,
//     local_stg_key?: string,
//     DefaultTheme?: string,
//     toggleThemeDefault: {
//         type: "attribute",
//         value: "data-toggle-theme-default",
//     },
//     toggleThemeCustom: { type: "attribute", value: "data-toggle-theme-custom" },
//     chooseTheme: { type: "attribute", value: "data-choose-theme" },
//     setTheme: { type: "attribute", value: "data-set-theme" },
// };

/**
 *
 * @param {{children: React.ReactNode, options: { dom_attr_key?: string, local_stg_key?: string, DefaultTheme?: string, toggleThemeDefault: { type: "attribute", value: "data-toggle-theme-default", }, toggleThemeCustom: { type: "attribute", value: "data-toggle-theme-custom" }, chooseTheme: { type: "attribute", value: "data-choose-theme" }, setTheme: { type: "attribute", value: "data-set-theme" } }}} props Propriedades
 * @returns
 */
function ThemeProvider({ children, options }) {
    const [theme, SetTheme] = useState("default");

    const local_stg_key = options.local_stg_key
        ? options.local_stg_key
        : "theme";

    const dom_attr_key = options.dom_attr_key
        ? options.dom_attr_key
        : "data-theme";

    const setTheme = (theme) => {
        document.documentElement.setAttribute(dom_attr_key, theme);
        localStorage.setItem(local_stg_key, theme);
        SetTheme(theme);
    };

    const toggleThemeDefault = () =>
        setTheme(
            theme === "light" ? "dark" : "light",
            dom_attr_key,
            local_stg_key
        );

    const toggleThemeCustom = (...themes) => {
        if (themes.length === 1) {
            ["default", "light", "dark", themes[0]].forEach((e, i, els) => {
                if (i + 1 < els.length) {
                    if (e === theme) {
                        setTheme(els[i + 1], dom_attr_key, local_stg_key);
                    }
                } else {
                    if (e === theme) {
                        setTheme(els[0], dom_attr_key, local_stg_key);
                    }
                }
            });
        } else if (themes.length > 1) {
            themes.forEach((e, i, els) => {
                if (i + 1 < els.length) {
                    if (e === theme) {
                        setTheme(els[i + 1], dom_attr_key, local_stg_key);
                    }
                } else {
                    if (e === theme) {
                        setTheme(els[0], dom_attr_key, local_stg_key);
                    }
                }
            });
        } else {
            toggleThemeDefault();
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                setTheme,
                toggleThemeDefault,
                toggleThemeCustom,
                theme,
                options,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

module.exports = ThemeProvider;
module.exports = { ThemeContext };
