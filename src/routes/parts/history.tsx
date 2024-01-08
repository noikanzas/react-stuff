import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/parts/history').createRoute({
  component: OrderHistoryComponent,
});

function OrderHistoryComponent() {
  return <Typography variant="h1">Order History & Tracking</Typography>;
}
