import { addAlpha, blend, interactionStates, lightTheme, WaterialTheme } from "@waterial/base";
import useRipple from "@waterial/ripple";
import { Label } from "@waterial/typography";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

type ButtonContentProps = {
  withIcon: boolean;
  variant: "elevated" | "filled" | "tonal" | "outlined" | "text";
};

type ButtonStyles = { [key in ButtonContentProps["variant"]]: string };

const enabledContainerBackground = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.surface[1],
  filled: theme.colors.primary,
  tonal: theme.colors.secondaryContainer,
  outlined: "transparent",
  text: "transparent",
});

const outlinedContainerOutlineColor = (theme: WaterialTheme) => ({
  enabled: theme.colors.outline,
  hovered: theme.colors.outline,
  focused: theme.colors.primary,
  pressed: theme.colors.outline,
});

const enabledContainerElevation = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.elevation[1],
  filled: theme.elevation[0],
  tonal: theme.elevation[0],
  outlined: theme.elevation[0],
  text: theme.elevation[0],
});

const enabledContainerTextColor = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.colors.primary,
  filled: theme.colors.onPrimary,
  tonal: theme.colors.onSecondaryContainer,
  outlined: theme.colors.primary,
  text: theme.colors.primary,
});

const hoveredContainerBackground = (theme: WaterialTheme): ButtonStyles => ({
  elevated: blend(
    enabledContainerBackground(theme).elevated,
    addAlpha(theme.colors.primary, interactionStates.hover)
  ),
  filled: blend(
    enabledContainerBackground(theme).filled,
    addAlpha(theme.colors.onPrimary, interactionStates.hover)
  ),
  tonal: blend(
    enabledContainerBackground(theme).tonal,
    addAlpha(theme.colors.onSecondaryContainer, interactionStates.hover)
  ),
  outlined: addAlpha(theme.colors.primary, interactionStates.hover),
  text: addAlpha(theme.colors.primary, interactionStates.hover),
});

const hoveredContainerElevation = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.elevation[2],
  filled: theme.elevation[1],
  tonal: theme.elevation[1],
  outlined: theme.elevation[0],
  text: theme.elevation[0],
});

const hoveredContainerTextColor = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.colors.primary,
  filled: theme.colors.onPrimary,
  tonal: theme.colors.onSecondaryContainer,
  outlined: theme.colors.primary,
  text: theme.colors.primary,
});

const pressedContainerBackground = (theme: WaterialTheme): ButtonStyles => ({
  elevated: blend(
    enabledContainerBackground(theme).elevated,
    addAlpha(theme.colors.primary, interactionStates.press)
  ),
  filled: blend(
    enabledContainerBackground(theme).filled,
    addAlpha(theme.colors.onPrimary, interactionStates.hover)
  ),
  tonal: blend(
    enabledContainerBackground(theme).tonal,
    addAlpha(theme.colors.onSecondaryContainer, interactionStates.press)
  ),
  outlined: addAlpha(theme.colors.primary, interactionStates.press),
  text: addAlpha(theme.colors.primary, interactionStates.press),
});

const pressedContainerElevation = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.elevation[1],
  filled: theme.elevation[0],
  tonal: theme.elevation[0],
  outlined: theme.elevation[0],
  text: theme.elevation[0],
});

const pressedContainerTextColor = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.colors.primary,
  filled: theme.colors.onPrimary,
  tonal: theme.colors.onSecondaryContainer,
  outlined: theme.colors.primary,
  text: theme.colors.primary,
});

const disabledContainerBackground = (theme: WaterialTheme): ButtonStyles => ({
  elevated: addAlpha(theme.colors.onSurface, 0.12),
  filled: addAlpha(theme.colors.onSurface, 0.12),
  tonal: addAlpha(theme.colors.onSurface, 0.12),
  outlined: "transparent",
  text: "transparent",
});

const disabledContainerTextColor = (theme: WaterialTheme): ButtonStyles => ({
  elevated: addAlpha(theme.colors.onSurface, 0.38),
  filled: addAlpha(theme.colors.onSurface, 0.38),
  tonal: addAlpha(theme.colors.onSurface, 0.38),
  outlined: addAlpha(theme.colors.onSurface, 0.38),
  text: addAlpha(theme.colors.onSurface, 0.38),
});

const disabledContainerElevation = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.elevation[0],
  filled: theme.elevation[0],
  tonal: theme.elevation[0],
  outlined: theme.elevation[0],
  text: theme.elevation[0],
});

const focusedContainerBackground = (theme: WaterialTheme): ButtonStyles => ({
  elevated: blend(
    enabledContainerBackground(theme).elevated,
    addAlpha(theme.colors.primary, interactionStates.focus)
  ),
  filled: blend(
    enabledContainerBackground(theme).filled,
    addAlpha(theme.colors.onPrimary, interactionStates.focus)
  ),
  tonal: blend(
    enabledContainerBackground(theme).tonal,
    addAlpha(theme.colors.onSecondaryContainer, interactionStates.focus)
  ),
  outlined: addAlpha(theme.colors.primary, interactionStates.focus),
  text: addAlpha(theme.colors.primary, interactionStates.focus),
});

const focusedContainerElevation = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.elevation[1],
  filled: theme.elevation[0],
  tonal: theme.elevation[0],
  outlined: theme.elevation[0],
  text: theme.elevation[0],
});

const focusedContainerTextColor = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.colors.primary,
  filled: theme.colors.onPrimary,
  tonal: theme.colors.onSecondaryContainer,
  outlined: theme.colors.primary,
  text: theme.colors.primary,
});

const containerRippleColor = (theme: WaterialTheme): ButtonStyles => ({
  elevated: theme.colors.primary,
  filled: theme.colors.onPrimary,
  tonal: theme.colors.onSecondaryContainer,
  outlined: theme.colors.primary,
  text: theme.colors.primary,
});

const ButtonContainer = styled.button<ButtonContentProps>(
  {
    height: "40px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    transition: "all 200ms",
    outline: "none",
    borderWidth: "0px",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0)",
    paddingTop: "10px",
    paddingBottom: "10px",
    boxSizing: "border-box",
    "-moz-box-sizing": "border-box",
    "-webkit-box-sizing": "border-box",

    /* IMPORTANT: use :enabled selector to aviod showing interation states when disabled */
    "&:hover:enabled": {
      cursor: "pointer",
    },

    "&:disabled:hover": {
      cursor: "not-allowed",
    },
  },
  ({ theme = lightTheme, ...props }) => ({
    background: enabledContainerBackground(theme)[props.variant],
    boxShadow: enabledContainerElevation(theme)[props.variant],
    color: enabledContainerTextColor(theme)[props.variant],
    paddingRight: props.variant === "text" ? (props.withIcon ? 16 : 12) : 24,
    paddingLeft: props.variant === "text" ? 12 : props.withIcon ? 16 : 24,
    border:
      props.variant === "outlined"
        ? "1px solid " + outlinedContainerOutlineColor(theme).enabled
        : "none",
    minWidth: props.variant === "text" ? "48px" : "auto",

    "&:hover:enabled": {
      backgroundColor: hoveredContainerBackground(theme)[props.variant],
      boxShadow: hoveredContainerElevation(theme)[props.variant],
      color: hoveredContainerTextColor(theme)[props.variant],
      border:
        props.variant === "outlined"
          ? "1px solid " + outlinedContainerOutlineColor(theme).hovered
          : "none",
    },

    "&:active:enabled": {
      backgroundColor: pressedContainerBackground(theme)[props.variant],
      boxShadow: `${pressedContainerElevation(theme)[props.variant]} !important`,
      color: pressedContainerTextColor(theme)[props.variant],
      border:
        props.variant === "outlined"
          ? "1px solid " + outlinedContainerOutlineColor(theme).pressed
          : "none",
    },

    /* NOTE: Only show focused styles to keyboard users */
    "&:focus-visible:enabled": {
      backgroundColor: focusedContainerBackground(theme)[props.variant],
      boxShadow: `${focusedContainerElevation(theme)[props.variant]} !important`,
      color: focusedContainerTextColor(theme)[props.variant],
      border:
        props.variant === "outlined"
          ? "1px solid " + outlinedContainerOutlineColor(theme).focused
          : "none",
    },

    "&:disabled": {
      backgroundColor: disabledContainerBackground(theme)[props.variant],
      color: disabledContainerTextColor(theme)[props.variant],
      boxShadow: disabledContainerElevation(theme)[props.variant],
    },
  })
);

const buttonContentDefaults = {
  variant: "elevated",
} as const;

ButtonContainer.defaultProps = buttonContentDefaults;

const ButtonIconGap = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  display: inline-block;
`;

const ButtonIcon = styled.div`
  display: inline;
  vertical-align: middle;
`;

export type ButtonProps = Partial<typeof ButtonContainer.defaultProps> & {
  /** Icon to put on the left side of the button. */
  icon?: ReactNode;
};

/**
 * Waterial `Button` component.
 *
 * This component is designed upon [Material Design 3 - Common Buttons](https://m3.material.io/components/buttons/overview).
 */
const Button = ({ children, icon, variant, ...rest }: ButtonProps) => {
  let theme = useTheme();
  if (!theme.colors) theme = lightTheme;
  const [props, ripples] = useRipple({
    props: rest,
    color: containerRippleColor(theme)[variant ?? buttonContentDefaults.variant],
    circleSize: 10,
  });

  return (
    <ButtonContainer
      {...props}
      variant={variant ?? buttonContentDefaults.variant}
      withIcon={!!icon}
    >
      <ButtonIcon>{icon}</ButtonIcon>
      {icon && <ButtonIconGap size={8} />}
      <Label size="large" inline color="inherit">
        {children}
      </Label>
      {ripples}
    </ButtonContainer>
  );
};

export default Button;
