import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: red[500],
        },
    },
    // shadows: undefined,
    // spacing: undefined,
    // typography: undefined,
});

// TODO: Add more customizations to the theme
// darkTheme.ts
// lightTheme.ts

export default theme;