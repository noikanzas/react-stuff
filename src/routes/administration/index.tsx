import { Typography } from "@mui/material";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/administration/').createRoute({
  component: CompanyDetailsComponent,
});
function CompanyDetailsComponent() {
  return (
    <>
      <Typography variant="h1">Administration - Company Details</Typography>
    </>
  );
}
