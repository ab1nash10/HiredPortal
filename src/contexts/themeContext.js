import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  toggleThemeMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
