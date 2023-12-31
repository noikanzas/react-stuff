import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  spacing: 8,
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
});
