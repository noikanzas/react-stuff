import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/service/').createRoute({
  component: ServiceTicketOverviewComponent,
});

function ServiceTicketOverviewComponent() {
  return <Typography variant="h1">Service - Ticket Overview</Typography>;
}
