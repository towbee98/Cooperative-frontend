import React from "react";
import { Outlet } from "react-router-dom";
import "./dashboard.styles.css";
import MenuContainer from "../../components/dashboard-menu/dashboard-menu.component";
import RecentTransactions from "../../components/Recent-Transactions/recent-transactions.component";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MenuContainer
        options={[
          { name: "DASHBOARD", route: "" },
          { name: "RECENT", route: "recent" },
          { name: "ALL TRANSACTIONS", route: "allTransactions" },
          { name: "PROFILE", route: "/member" }
        ]}
      />
      <Outlet />
      <RecentTransactions />
    </div>
  );
};

export default Dashboard;
