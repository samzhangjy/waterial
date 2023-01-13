import { lightTheme, darkTheme } from "../packages/base";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

const ThemeBlock = styled.div(
  ({ left, fill, theme }) => `
      position: absolute;
      top: 0;
      left: ${left || fill ? 0 : "50vw"};
      border-right: ${left ? "1px solid #202020" : "none"};
      right: ${left ? "calc(50vw - 33px)" : 0};
      width: ${fill ? "auto" : "calc(50vw - 33px)"};
      bottom: 0;
      overflow: auto;
      padding: 1rem;
      background: ${theme.colors.background};
      (min-width: 640px) {
        left: ${left ? 0 : "50vw"};
        right: ${left ? "50vw" : 0};
        padding: 0 !important;
      }
    `
);

export const withTheme = (StoryFn, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "light" ? lightTheme : darkTheme;

  switch (theme) {
    case "side-by-side": {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <ThemeBlock left>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <ThemeBlock>
              <StoryFn />
            </ThemeBlock>
          </ThemeProvider>
        </>
      );
    }
    default: {
      return (
        <ThemeProvider theme={storyTheme}>
          <ThemeBlock fill>
            <StoryFn />
          </ThemeBlock>
        </ThemeProvider>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme for the components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withTheme];
