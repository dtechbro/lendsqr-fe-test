import DashboardLayout from "../components/DashboardLayout";
import React from "react";
import UsersTable from "../components/UsersTable";
import users from "../data/users.json";
import StatsGrid from "../components/StatsGrid";

const UsersInfo: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="users-info">
        <h1 style={{ color: "#213F7D" }}>Users</h1>
        <StatsGrid users={users} />
        <UsersTable users={users} />
      </div>
    </DashboardLayout>
  );
};

export default UsersInfo;
