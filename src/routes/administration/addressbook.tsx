import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/administration/addressbook').createRoute({
  component: AddressBookComponent,
});

function AddressBookComponent() {
  return <Typography variant="h1">Administration - Address Book</Typography>;
}
