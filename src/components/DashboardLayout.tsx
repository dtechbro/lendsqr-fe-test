import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/dashboardlayout.scss";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      {/* Navbar at the top */}
      <Navbar />

      <div className="main-area">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
