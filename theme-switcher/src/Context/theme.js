import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMOode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
