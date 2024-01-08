import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/administration/users').createRoute({
  component: UserManagementComponent,
});
function UserManagementComponent() {
  return <Typography variant="h1">Administration - User Management</Typography>;
}
