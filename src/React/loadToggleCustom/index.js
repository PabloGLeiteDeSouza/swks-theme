import { useContext } from "react";
import { ThemeContext } from "../provider";

function loadToggleThemeCustom() {
    
    document.addEventListener("DOMContentLoaded", () => {
        const { options, toggleThemeCustom } = useContext(ThemeContext);
        const custom = options.toggleThemeCustom
            ? options.toggleThemeCustom
            : { type: "attribute", value: "data-toggle-custom-theme" };
        switch (custom.type) {
            case "attribute":
                document.querySelectorAll(`[${custom.value}]`).forEach(
                    /**
                     * 
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            toggleThemeCustom(e.getAttribute(custom.value).split(","));
                        });
                    }
                );
                break;
    
            case "name":
                document.getElementsByName(choose.value).forEach(
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
                document.getElementsByClassName(choose.value).forEach(
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
                document.querySelectorAll("[data-toggle-custom-theme]").forEach(
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

export default loadToggleThemeCustom;