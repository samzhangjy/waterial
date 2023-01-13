import { Global } from "@emotion/react";
import { lightTheme, WaterialTheme } from "@waterial/base";

export type GlobalStylesProps = {
  theme: WaterialTheme;
};

const GlobalStyles = (props: GlobalStylesProps) => (
  <Global
    styles={{
      body: {
        backgroundColor: props.theme.colors.background,
        padding: 0,
        margin: 0,
      },
    }}
  />
);

GlobalStyles.defaultProps = {
  theme: lightTheme,
};

export default GlobalStyles;
