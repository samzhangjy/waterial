import { lightTheme, Breakpoints } from "@waterial/base";
import styled from "@emotion/styled";

// eslint-disable-next-line @typescript-eslint/ban-types
type OtherString = string & {};

export type ContainerProps = {
  maxWidth?: keyof Breakpoints | OtherString;
  padding?: string;
};

const Container = styled.div<ContainerProps>(({ theme = lightTheme, ...props }) => ({
  maxWidth:
    typeof props.maxWidth === "undefined"
      ? theme.breakpoints.md
      : props.maxWidth in theme.breakpoints
      ? theme.breakpoints[props.maxWidth as keyof Breakpoints]
      : props.maxWidth,
  margin: "0 auto",
  padding: props.padding ? "0px " + props.padding : "none",
}));

Container.defaultProps = {
  maxWidth: "md",
  padding: "20px",
};

export default Container;
