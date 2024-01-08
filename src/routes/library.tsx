import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/library').createRoute({
  component: LibraryComponent,
});

function LibraryComponent() {
  return <Typography variant="h1">Documents</Typography>;
}
