import { blend, hexToRGB } from "./utils";
import ref from "./ref";
import typography from "./typography";
import { breakpoints, Breakpoints } from "./breakpoints";

export const interactionStates = {
  enabled: 0.0,
  disabled: 0.0,
  hover: 0.08,
  focus: 0.12,
  press: 0.12,
  drag: 0.16,
  ripple: 0.18,
};

/** Waterial theme object. */
export type WaterialTheme = {
  isDarkTheme: boolean;
  colors: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    shadow: string;
    surfaceTint: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    scrim: string;
  };
  surface: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  surfaceBackdrops: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  elevation: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    lowered: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    default: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
  };
  typography: {
    display: {
      large: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      medium: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      small: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    headline: {
      large: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      medium: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      small: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    title: {
      large: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      medium: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      small: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    label: {
      large: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      medium: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      small: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
    body: {
      large: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      medium: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
      small: {
        family: string;
        style: string;
        weight: string;
        size: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
  };
  breakpoints: Breakpoints;
};

const lightColors = {
  primary: ref.primary[40],
  onPrimary: ref.primary[100],
  primaryContainer: ref.primary[90],
  onPrimaryContainer: ref.primary[10],
  secondary: ref.secondary[40],
  onSecondary: ref.secondary[100],
  secondaryContainer: ref.secondary[90],
  onSecondaryContainer: ref.secondary[10],
  tertiary: ref.tertiary[40],
  onTertiary: ref.tertiary[100],
  tertiaryContainer: ref.tertiary[90],
  onTertiaryContainer: ref.tertiary[10],
  error: ref.error[40],
  onError: ref.error[100],
  errorContainer: ref.error[90],
  onErrorContainer: ref.error[10],
  background: ref.neutral[99],
  onBackground: ref.neutral[10],
  surface: ref.neutral[99],
  onSurface: ref.neutral[10],
  surfaceVariant: ref.neutralVariant[90],
  onSurfaceVariant: ref.neutralVariant[30],
  outline: ref.neutralVariant[50],
  shadow: ref.neutral[0],
  surfaceTint: ref.primary[40],
  inverseSurface: ref.neutral[20],
  inverseOnSurface: ref.neutral[95],
  inversePrimary: ref.primary[80],
  scrim: ref.neutral[0],
};

const lightSurfaceBackdrops = {
  0: "none",
  1: hexToRGB(lightColors.primary, 0.05),
  2: hexToRGB(lightColors.primary, 0.08),
  3: hexToRGB(lightColors.primary, 0.11),
  4: hexToRGB(lightColors.primary, 0.12),
  5: hexToRGB(lightColors.primary, 0.14),
};

const lightSurface = {
  0: lightColors.surface,
  1: blend(lightColors.surface, lightSurfaceBackdrops[1]),
  2: blend(lightColors.surface, lightSurfaceBackdrops[2]),
  3: blend(lightColors.surface, lightSurfaceBackdrops[3]),
  4: blend(lightColors.surface, lightSurfaceBackdrops[4]),
  5: blend(lightColors.surface, lightSurfaceBackdrops[5]),
};

const lightDefaultElevation = {
  0: "none",
  1: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  2: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
};

const lightLoweredElevation = {
  0: "none",
  1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
  3: "0px 1px 3px rgba(0, 0, 0, 0.3)",
  4: "0px 2px 3px rgba(0, 0, 0, 0.3)",
  5: "0px 4px 4px rgba(0, 0, 0, 0.3)",
};

const lightElevation = {
  0: "none",
  1: `${lightDefaultElevation[1]}, ${lightLoweredElevation[1]}`,
  2: `${lightDefaultElevation[2]}, ${lightLoweredElevation[2]}`,
  3: `${lightDefaultElevation[3]}, ${lightLoweredElevation[3]}`,
  4: `${lightDefaultElevation[4]}, ${lightLoweredElevation[4]}`,
  5: `${lightDefaultElevation[5]}, ${lightLoweredElevation[5]}`,
  lowered: lightLoweredElevation,
  default: lightDefaultElevation,
};

/** Builtin Waterial light theme. */
export const lightTheme: WaterialTheme = {
  isDarkTheme: false,
  colors: lightColors,
  surface: lightSurface,
  elevation: lightElevation,
  surfaceBackdrops: lightSurfaceBackdrops,
  typography,
  breakpoints,
};

const darkColors = {
  primary: ref.primary[80],
  onPrimary: ref.primary[20],
  primaryContainer: ref.primary[30],
  onPrimaryContainer: ref.primary[90],
  secondary: ref.secondary[80],
  onSecondary: ref.secondary[20],
  secondaryContainer: ref.secondary[30],
  onSecondaryContainer: ref.secondary[90],
  tertiary: ref.tertiary[80],
  onTertiary: ref.tertiary[20],
  tertiaryContainer: ref.tertiary[30],
  onTertiaryContainer: ref.tertiary[90],
  error: ref.error[80],
  onError: ref.error[20],
  errorContainer: ref.error[30],
  onErrorContainer: ref.error[90],
  background: ref.neutral[10],
  onBackground: ref.neutral[90],
  surface: ref.neutral[10],
  onSurface: ref.neutral[90],
  surfaceVariant: ref.neutralVariant[30],
  onSurfaceVariant: ref.neutralVariant[80],
  outline: ref.neutralVariant[60],
  shadow: ref.neutral[0],
  surfaceTint: ref.primary[80],
  inverseSurface: ref.neutral[90],
  inverseOnSurface: ref.neutral[20],
  inversePrimary: ref.primary[40],
  scrim: ref.neutral[0],
};

const darkSurfaceBackdrops = {
  0: "none",
  1: hexToRGB(darkColors.primary, 0.05),
  2: hexToRGB(darkColors.primary, 0.08),
  3: hexToRGB(darkColors.primary, 0.11),
  4: hexToRGB(darkColors.primary, 0.12),
  5: hexToRGB(darkColors.primary, 0.14),
};

const darkSurface = {
  0: darkColors.surface,
  1: blend(darkColors.surface, darkSurfaceBackdrops[1]),
  2: blend(darkColors.surface, darkSurfaceBackdrops[2]),
  3: blend(darkColors.surface, darkSurfaceBackdrops[3]),
  4: blend(darkColors.surface, darkSurfaceBackdrops[4]),
  5: blend(darkColors.surface, darkSurfaceBackdrops[5]),
};

const darkDefaultElevation = {
  0: "none",
  1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
  3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
};

const darkLoweredElevation = {
  0: "none",
  1: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  2: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  3: "0px 1px 3px rgba(0, 0, 0, 0.3)",
  4: "0px 2px 3px rgba(0, 0, 0, 0.3)",
  5: "0px 4px 4px rgba(0, 0, 0, 0.3)",
};

const darkElevation = {
  0: "none",
  1: `${darkDefaultElevation[1]}, ${darkLoweredElevation[1]}`,
  2: `${darkDefaultElevation[2]}, ${darkLoweredElevation[2]}`,
  3: `${darkDefaultElevation[3]}, ${darkLoweredElevation[3]}`,
  4: `${darkDefaultElevation[4]}, ${darkLoweredElevation[4]}`,
  5: `${darkDefaultElevation[5]}, ${darkLoweredElevation[5]}`,
  lowered: darkLoweredElevation,
  default: darkDefaultElevation,
};

/** Builtin Waterial dark theme. */
export const darkTheme: WaterialTheme = {
  isDarkTheme: true,
  colors: darkColors,
  surface: darkSurface,
  elevation: darkElevation,
  surfaceBackdrops: darkSurfaceBackdrops,
  typography,
  breakpoints,
};
