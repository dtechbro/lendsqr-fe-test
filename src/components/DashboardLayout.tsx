import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/dashboardlayout.scss";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-layout">
      {/* Navbar at the top */}
      <Navbar toggleSidebar={toggleSidebar}/>

      <div className="main-area">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
