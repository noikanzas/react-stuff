import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/service/create').createRoute({
  component: CreateServiceTicket,
});

function CreateServiceTicket() {
  return <Typography variant="h1">Service - Create Ticket</Typography>;
}
