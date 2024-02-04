import { useContext } from "react";
import { ThemeContext } from "../provider";

function loadSet() {
    
    document.addEventListener("DOMContentLoaded", () => {
        const { options, setTheme } = useContext(ThemeContext);
        const SetTheme = options.setTheme
            ? options.setTheme
            : { type: "attribute", value: "data-set-theme" };
        switch (SetTheme.type) {
            case "attribute":
                document.querySelectorAll(`[${SetTheme.value}]`).forEach(
                    /**
                     * 
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            setTheme(e.getAttribute(SetTheme.value));
                        });
                    }
                );
                break;
    
            case "name":
                document.getElementsByName(SetTheme.value).forEach(
                    /**
                     *
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            setTheme(e.value);
                        });
                    }
                );
                break;
    
            case "class":
                document.getElementsByClassName(SetTheme.value).forEach(
                    /**
                     *
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            setTheme(e.value);
                        });
                    }
                );
                break;
        
            default:
                document.querySelectorAll("[data-set-theme]").forEach(
                    /**
                     *
                     * @param {HTMLInputElement} e
                     */
                    (e) => {
                        e.addEventListener("change", () => {
                            setTheme("default");
                        });
                    }
                );
                break;
        }
    });
}

export default loadSet;