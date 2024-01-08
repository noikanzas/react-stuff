import { Outlet } from "@tanstack/react-router";
import { Box, Divider, Typography, Paper } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Sidebar } from "../components/Sidebar";
import { useDataSync } from "../hooks/useDataSync";
import { RootRoute } from "@tanstack/react-router";

export const RootComponent = () => {
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

export const Route = new RootRoute({
  component: RootComponent,
});
