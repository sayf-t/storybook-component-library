import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import getTheme from '../src/theme'; // Ensure this path is correct

// Custom decorator for applying the theme
const withMuiTheme = (Story, context) => {
  // Determine the theme mode from Storybook's global context, defaulting to 'light'
  const themeMode = context.globals.theme === 'dark' ? 'dark' : 'light';
  const theme = getTheme(themeMode); // Use the getTheme function to get the theme object

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent styling across browsers */}
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

// Define a global type for theme switching in Storybook UI
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light', // Default theme
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const parameters = {
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
};