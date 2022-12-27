import { addAlpha, blend, interactionStates, lightTheme, WaterialTheme } from "@waterial/base";
import useRipple from "@waterial/ripple";
import { Label } from "@waterial/typography";
import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";

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

const ButtonContainer = styled.button<ButtonContentProps>`
  height: 40px;
  border-radius: 20px;
  background: ${(props) => enabledContainerBackground(props.theme)[props.variant]};
  box-shadow: ${(props) => enabledContainerElevation(props.theme)[props.variant]};
  overflow: hidden;
  position: relative;
  transition: all 200ms;
  outline: none;
  border-width: 0px;
  border-style: solid;
  color: ${(props) => enabledContainerTextColor(props.theme)[props.variant]};
  border-color: rgba(0, 0, 0, 0);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${(props) => (props.variant === "text" ? (props.withIcon ? 16 : 12) : 24)}px;
  padding-left: ${(props) => (props.variant === "text" ? 12 : props.withIcon ? 16 : 24)}px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: ${(props) =>
    props.variant === "outlined"
      ? "1px solid " + outlinedContainerOutlineColor(props.theme).enabled
      : "none"};
  min-width: ${(props) => (props.variant === "text" ? "48px" : "auto")};

  /* IMPORTANT: use :enabled selector to aviod showing interation states when disabled */
  &:hover:enabled {
    background-color: ${(props) => hoveredContainerBackground(props.theme)[props.variant]};
    box-shadow: ${(props) => hoveredContainerElevation(props.theme)[props.variant]};
    color: ${(props) => hoveredContainerTextColor(props.theme)[props.variant]};
    border: ${(props) =>
      props.variant === "outlined"
        ? "1px solid " + outlinedContainerOutlineColor(props.theme).hovered
        : "none"};
    cursor: pointer;
  }

  &:active:enabled {
    background-color: ${(props) => pressedContainerBackground(props.theme)[props.variant]};
    box-shadow: ${(props) => pressedContainerElevation(props.theme)[props.variant]} !important;
    color: ${(props) => pressedContainerTextColor(props.theme)[props.variant]};
    border: ${(props) =>
      props.variant === "outlined"
        ? "1px solid " + outlinedContainerOutlineColor(props.theme).pressed
        : "none"};
  }

  /* NOTE: Only show focused styles to keyboard users */
  &:focus-visible:enabled {
    background-color: ${(props) => focusedContainerBackground(props.theme)[props.variant]};
    box-shadow: ${(props) => focusedContainerElevation(props.theme)[props.variant]} !important;
    color: ${(props) => focusedContainerTextColor(props.theme)[props.variant]};
    border: ${(props) =>
      props.variant === "outlined"
        ? "1px solid " + outlinedContainerOutlineColor(props.theme).focused
        : "none"};
  }

  &:disabled {
    background-color: ${(props) => disabledContainerBackground(props.theme)[props.variant]};
    color: ${(props) => disabledContainerTextColor(props.theme)[props.variant]};
    box-shadow: ${(props) => disabledContainerElevation(props.theme)[props.variant]};
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const buttonContentDefaults = {
  theme: lightTheme,
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
  const theme = useTheme() ?? lightTheme;
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
