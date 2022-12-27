import { lightTheme, Breakpoints } from "@waterial/base";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-types
type OtherString = string & {};

export type ContainerProps = {
  maxWidth?: keyof Breakpoints | OtherString;
  padding?: string;
};

const Container = styled.div<ContainerProps>`
  max-width: ${(props) =>
    typeof props.maxWidth === "undefined"
      ? props.theme.breakpoints.md
      : props.maxWidth in props.theme.breakpoints
      ? props.theme.breakpoints[props.maxWidth as keyof Breakpoints]
      : props.maxWidth};
  margin: 0 auto;
  padding: ${(props) => (props.padding ? "0px " + props.padding : "none")};
`;

Container.defaultProps = {
  theme: lightTheme,
  maxWidth: "md",
  padding: "20px",
};

export default Container;
