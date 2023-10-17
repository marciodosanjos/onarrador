import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./../theme";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
