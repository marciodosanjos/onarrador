import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100vh",
          "& #__next": {
            height: "100%",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "black",
          "&:hover": {
            color: "#5c6e6e",
          },
        },
      },
    },
  },

  typography: {
    fontFamily: ["Times New Roman", "Helvetica", "Arial", "sans-serif"].join(
      ",",
    ),
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
