import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      Layout Component
      <Outlet />
    </div>
  );
};
