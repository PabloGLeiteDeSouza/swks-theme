import { useContext } from "react";
import { ThemeContext } from "../provider";

function loadToggleThemeDefault() {
    document.addEventListener("DOMContentLoaded", () => {
        const { options, toggleThemeDefault } = useContext(ThemeContext);

        const Default = options.toggleThemeDefault
            ? options.toggleThemeCustom
            : { type: "attribute", value: "data-toggle-default-theme" };
        switch (Default.type) {
            case "attribute":
                document.querySelectorAll(`[${Default.value}]`).forEach(
                    /**
                     * 
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            toggleThemeCustom(e.getAttribute(Default.value).split(","));
                        });
                    }
                );
                break;
    
            case "name":
                document.getElementsByName(Default.value).forEach(
                    /**
                     *
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            toggleThemeCustom(e.value.split(","));
                        });
                    }
                );
                break;
    
            case "class":
                document.getElementsByClassName(Default.value).forEach(
                    /**
                     *
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            toggleThemeCustom(e.value.split(","));
                        });
                    }
                );
                break;
        
            default:
                document.querySelectorAll("[data-toggle-default-theme]").forEach(
                    /**
                     *
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            toggleThemeCustom("default", "dark", "light");
                        });
                    }
                );
                break;
        }
    });
}

export default loadToggleThemeDefault;