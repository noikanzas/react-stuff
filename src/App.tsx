import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
// MUI Theming
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

// Root Layout Component
import { Layout } from "./components/Layout";

// Pages Import
import { Home } from "./pages/Home";
import { ServiceTicketOverview } from "./pages/ServiceTicketOverview";
import { CreateServiceTicket } from "./pages/CreateServiceTicket";
import { PartsTicketOverview } from "./pages/PartsTicketOverview";
import { CreatePartsTicket } from "./pages/CreatePartsTicket";
import { OrderHistoryAndTracking } from "./pages/OrderHistoryAndTracking";
import { Profile } from "./pages/Profile";

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="service" element={<ServiceTicketOverview />} />
            <Route path="service/create" element={<CreateServiceTicket />} />
            <Route path="parts" element={<PartsTicketOverview />} />
            <Route path="parts/create" element={<CreatePartsTicket />} />
            <Route path="parts/history" element={<OrderHistoryAndTracking />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};
