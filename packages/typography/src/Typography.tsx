import { lightTheme } from "@waterial/base";
import styled from "@emotion/styled";
import { TypographyRole, TypographySize } from "./index";

export type TypographyProps = {
  role: TypographyRole;
  size: TypographySize;
  inline?: boolean;
};

const Typography = styled.span<TypographyProps>({}, ({ theme = lightTheme, ...props }) => ({
  fontFamily: theme.typography[props.role][props.size].family,
  fontSize: theme.typography[props.role][props.size].size,
  fontWeight: theme.typography[props.role][props.size].weight,
  lineHeight: theme.typography[props.role][props.size].lineHeight,
  display: props.inline ? "inline" : "block",
  color: props.color ? props.color : theme.colors.onBackground,
}));

Typography.defaultProps = {
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
