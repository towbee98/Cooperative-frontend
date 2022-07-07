import React from "react";
import "./admin-dashboard.styles.css";
import MenuContainer from "../../components/dashboard-menu/dashboard-menu.component";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <MenuContainer
        options={[
          { name: "DASHBOARD", route: "" },
          { name: "CREDITORS", route: "creditors" },
          { name: "ACCOUNT STATEMENT", route: "account" },
          { name: "MEMBERS", route: "members" },
          { name: "REGISTRATION", route: "registration" }
        ]}
      />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
