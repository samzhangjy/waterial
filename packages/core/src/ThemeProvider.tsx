import { darkTheme, lightTheme, WaterialTheme } from "@waterial/base";
import {
  ThemeProvider as BaseProvider,
  ThemeProviderProps as BaseProviderProps,
} from "@emotion/react";
import GlobalStyles from "./GlobalStyles";

export type ThemeProviderProps = {
  theme?: "light" | "dark" | WaterialTheme;
  withGlobalStyles?: boolean;
} & Omit<BaseProviderProps, "theme">;

const ThemeProvider = ({ theme, withGlobalStyles, children, ...rest }: ThemeProviderProps) => {
  const themeObject =
    theme === "light" || theme === undefined ? lightTheme : theme === "dark" ? darkTheme : theme;
  return (
    <>
      <BaseProvider theme={themeObject} {...rest}>
        {withGlobalStyles && <GlobalStyles theme={themeObject} />}
        {children}
      </BaseProvider>
    </>
  );
};

export default ThemeProvider;
