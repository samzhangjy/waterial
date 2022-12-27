import { lightTheme } from "@waterial/base";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    padding: 0px;
    margin: 0px;
  }
`;

GlobalStyles.defaultProps = {
  theme: lightTheme,
};

export default GlobalStyles;
