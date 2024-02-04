import { useContext } from "react";
import { ThemeContext } from "../provider"; 

function Start() {
    const { local_stg_key, dom_attr_key, DefaultTheme } = useContext(ThemeContext);
    const StoredTheme = localStorage.getItem(local_stg_key);
    const DomTheme = document.documentElement.getAttribute(dom_attr_key);
    if (StoredTheme) {
        setTheme(StoredTheme);
        return;
    }
    if (DefaultTheme) {
        setTheme(DefaultTheme);
        return;
    }
    if (DomTheme) {
        setTheme(DomTheme);
        return;
    }
}

export default Start;