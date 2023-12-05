import { Outlet } from "react-router-dom";
import { Box, Divider, Container } from "@mui/material";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100dvh",
      }}
    >
      <Sidebar />
      <Divider orientation="vertical" />
      <Container sx={{ flexGrow: 1, p: 2 }}>
        <Outlet />
      </Container>
    </Box>
  );
};
