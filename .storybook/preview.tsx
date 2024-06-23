import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import theme from "../src/theme";
// import { parameters  } from "@storybook/react";


// const withThemeProvider = (Story, context) => (
//   <ThemeProvider theme={theme}>
//     <Story {...context} />
//   </ThemeProvider>
// );

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Intro'],
      },
    },
  },
};
