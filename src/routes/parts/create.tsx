import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/parts/create').createRoute({
  component: CreatePartsTicketComponent,
});

function CreatePartsTicketComponent() {
  return (
    <Typography variant="h1">Spare Parts - Create Parts Ticket</Typography>
  );
}
