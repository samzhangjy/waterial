import { lightTheme } from "@waterial/base";
import styled from "styled-components";
import { TypographyRole, TypographySize } from "./index";

export type TypographyProps = {
  role: TypographyRole;
  size: TypographySize;
  inline?: boolean;
};

const Typography = styled.span<TypographyProps>`
  font-family: ${(props) => props.theme.typography[props.role][props.size].family};
  font-size: ${(props) => props.theme.typography[props.role][props.size].size};
  font-weight: ${(props) => props.theme.typography[props.role][props.size].weight};
  line-height: ${(props) => props.theme.typography[props.role][props.size].lineHeight};
  display: ${(props) => (props.inline ? "inline" : "block")};
  color: ${(props) => (props.color ? props.color : props.theme.colors.onBackground)};
`;

Typography.defaultProps = {
  theme: lightTheme,
  inline: false,
  size: "medium",
};

export const Display = ({
  size = "medium",
  ...rest
}: Exclude<typeof Typography.defaultProps, "role" | "size">) => (
  <Typography role="display" size={size} {...rest} />
);

export const Headline = ({
  size = "medium",
  ...rest
}: Exclude<typeof Typography.defaultProps, "role" | "size">) => (
  <Typography role="headline" size={size} {...rest} />
);

export const Title = ({
  size = "medium",
  ...rest
}: Exclude<typeof Typography.defaultProps, "role" | "size">) => (
  <Typography role="title" size={size} {...rest} />
);

export const Label = ({
  size = "medium",
  ...rest
}: Exclude<typeof Typography.defaultProps, "role" | "size">) => (
  <Typography role="label" size={size} {...rest} />
);

export const Text = ({
  size = "medium",
  ...rest
}: Exclude<typeof Typography.defaultProps, "role" | "size">) => (
  <Typography role="body" size={size} {...rest} />
);

export default Typography;
