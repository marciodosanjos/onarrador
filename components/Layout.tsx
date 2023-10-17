import Header from "./Header";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          paddingBottom: "30px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
