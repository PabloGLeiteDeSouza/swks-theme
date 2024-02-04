import Start  from "./loadStart";
import loadSet from "./loadSet";
import loadChoose from "./loadChoose";
import { useTheme } from "./functions/useTheme";
import { ThemeContext, ThemeProvider } from "./provider";
const provider = { ThemeContext, ThemeProvider };
const swkstheme = { provider: { ThemeProvider, ThemeContext }, useTheme };
export default swkstheme;
export { provider, useTheme }
