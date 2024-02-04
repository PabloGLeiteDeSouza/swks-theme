import { useContext } from "react";
import { ThemeContext } from "../provider";

function loadChoose() {
    document.addEventListener("DOMContentLoaded", () => {
        const { options, setTheme } = useContext(ThemeContext);
        const choose = options.chooseTheme
            ? options.chooseTheme
            : { type: "attribute", value: "data-choose-theme" };
        switch (choose.type) {
            case "attribute":
                document.querySelectorAll(`[${choose.value}]`).forEach(
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
    
            case "name":
                document.getElementsByName(choose.value).forEach(
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
                document.getElementsByClassName(choose.value).forEach(
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
                document.querySelectorAll("[data-choose-theme]").forEach(
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

export default loadChoose;