import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/parts/').createRoute({
  component: PartsTicketOverview,
});

function PartsTicketOverview() {
  return <Typography variant="h1">Spare Parts - Ticket Overview</Typography>;
}
