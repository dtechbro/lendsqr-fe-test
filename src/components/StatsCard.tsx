import React, { JSX } from "react";
import "../styles/statscard.scss";

interface StatsCardProps {
  title: string;
  value: number;
  icon: JSX.Element;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <div className="stats-content">
        <h3>{title}</h3>
        <p>{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatsCard;
