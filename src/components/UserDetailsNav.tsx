import React from "react";
import "../styles/UserDetailsNav.scss";

interface UserDetailsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const UserDetailsNav: React.FC<UserDetailsNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: "general", label: "General Details" },
    { id: "documents", label: "Documents" },
    { id: "bank", label: "Bank Details" },
    { id: "loans", label: "Loans" },
    { id: "savings", label: "Savings" },
    { id: "app", label: "App and System" },
  ];

  return (
    <div className="user-details-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={activeTab === tab.id ? "active" : ""}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default UserDetailsNav;