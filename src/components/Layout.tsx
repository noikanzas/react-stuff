import { Outlet } from "react-router-dom";
import { Box, Divider, Container, Paper } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
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
      <Paper
        elevation={0}
        sx={{
          flexGrow: 1,
          backgroundColor: blueGrey[50],
        }}
      >
        <Box
          sx={{
            p: 2,
          }}
        >
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
};
