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
import { ServiceTicketOverview } from "./pages/service/ServiceTicketOverview";
import { CreateServiceTicket } from "./pages/service/CreateServiceTicket";
import { PartsTicketOverview } from "./pages/parts/PartsTicketOverview";
import { CreatePartsTicket } from "./pages/parts/CreatePartsTicket";
import { OrderHistoryAndTracking } from "./pages/parts/OrderHistoryAndTracking";
import { Documents } from "./pages/Library";
import { CompanyDetails } from "./pages/administration/CompanyDetails";
import { AddressBook } from "./pages/administration/AddressBook";
import { UserManagement } from "./pages/administration/UserManagement";
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
            <Route path="documents" element={<Documents />} />
            <Route path="administration" element={<CompanyDetails />} />
            <Route path="administration/users" element={<UserManagement />} />
            <Route
              path="administration/addressbook"
              element={<AddressBook />}
            />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};
