import { RouterProvider, Router, ErrorComponent } from "@tanstack/react-router";
// MUI Theming
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import { routeTree } from "./routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = new Router({
  routeTree,
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};
