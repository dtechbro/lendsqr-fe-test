import React from "react";
import StatsCard from "./StatsCard";
import { User } from "../types";
import "../styles/StatsGrid.scss";
import {
  AllActiveUsersIcon,
  AllUsersIcon,
  UsersWIthLoansIcon,
  UsersWithSavingsIcons,
} from "../assets/svg";

interface StatsGridProps {
  users: User[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ users }) => {
  // Calculate stats
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const usersWithLoans = users.filter(
    (user) => parseFloat(user.loanBalance.replace("₦", "")) > 0
  ).length;
  const usersWithSavings = users.filter(
    (user) => parseFloat(user.savingsBalance.replace("₦", "")) > 0
  ).length;

  return (
    <div className="stats-grid">
      <StatsCard title="USERS" value={totalUsers} icon={<AllUsersIcon />} />

      <StatsCard
        title="ACTIVE USERS"
        value={activeUsers}
        icon={<AllActiveUsersIcon />}
      />

      <StatsCard
        title="USERS WITH LOANS"
        value={usersWithLoans}
        icon={<UsersWIthLoansIcon />}
      />

      <StatsCard
        title="USERS WITH SAVINGS"
        value={usersWithSavings}
        icon={<UsersWithSavingsIcons />}
      />
    </div>
  );
};

export default StatsGrid;
