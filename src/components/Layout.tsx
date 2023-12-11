import { Outlet } from "react-router-dom";
import { Box, Divider, Typography, Paper } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Sidebar } from "./Sidebar";
import { useDataSync } from "../hooks/useDataSync";

export const Layout = () => {
  const { isSyncing, lastSyncTime } = useDataSync();

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
        <Typography>
          Syncing: {isSyncing ? "Syncing database" : "Sync completed"}
        </Typography>
      </Paper>
    </Box>
  );
};
