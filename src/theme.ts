import { createTheme } from "@mui/material/styles";

// Function to create a theme based on the mode
const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode, // Use the mode parameter here
    primary: {
      // Example: Adjusting primary color based on the theme mode
      main: mode === 'light' ? 
      "#1976d2" : 
      "#7c51e9",
    },
    secondary: {
      main: "#f44336",
    },
    // Add additional color customizations here
    background: {
      // Example: Adjusting background color based on the theme mode
      default: mode === 'light' ? '#f5f5f5' :
       '#121923',
      paper: mode === 'light' ? '#f5f5f5' : 
      '#121923',
    },
    text: {
      // Example: Adjusting text color based on the theme mode
      primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 
      '#f5f5f5',
      secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : 
      '#f5f5f5',
    },
  },
  // You can add other theme customizations that are independent of the mode here
});

export default getTheme;