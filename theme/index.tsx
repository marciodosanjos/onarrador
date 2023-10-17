import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#331b3b ",
      dark: "#320139",
      contrastText: "white",
    },
    secondary: {
      main: "#320139",
      dark: "#333e50",
      light: "#5c6e6e ",
    },
  },
});
