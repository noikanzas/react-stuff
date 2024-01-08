import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/profile').createRoute({
  component: ProfileComponent,
});

function ProfileComponent() {
  return <Typography variant="h1">Profile</Typography>;
}
