import { Link, AppBar, Typography, Toolbar } from "@mui/material";

const categories = ["Cronicas", "Ensaios", "Reportagens"];

export default function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#331b3b" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5em" }}>
            O NARRADOR
          </Typography>
        </Toolbar>
        <Toolbar
          variant="dense"
          sx={{
            backgroundColor: "white",
            color: "black",
            justifyContent: "center",
          }}
        >
          {categories.map((category, index) => (
            <Link
              href={"/"}
              key={index}
              sx={{
                color: "black",
                marginRight: 1,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {category}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
}
