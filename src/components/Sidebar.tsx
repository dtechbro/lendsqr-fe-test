import { useState } from "react";
import { sidebarItems } from "./SidebarData";
import "../styles/sidebar.scss";
import { OrganizationDropdownIcon } from "../assets/svg";
import { LogoutIcon, OrganizationIcon } from "../assets/SidebarIcons";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const location = useLocation();

  // Static organization data
  const organizations = ["Irorun", "Kredi", "Lendsqr"];

  // Get the dashboard item (first item in the array)
  const dashboardItem = sidebarItems[0];

  // Get the remaining sections (skip the first item)
  const sections = sidebarItems.slice(1);

  return (
    <aside>
      <nav className="sidebar-nav">
        {/* Organization Dropdown */}
        <div className="org-dropdown">
          <div
            className="org-selector"
            onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
          >
            <OrganizationIcon />
            <span>Switch Organization</span>
            <div
              className={`dropdown-arrow ${isOrgDropdownOpen ? "open" : ""}`}
            >
              <OrganizationDropdownIcon />
            </div>
          </div>
          {isOrgDropdownOpen && (
            <ul className="org-list">
              {organizations.map((org, idx) => (
                <li key={idx} onClick={() => setIsOrgDropdownOpen(false)}>
                  {org}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dashboard Item */}
        <ul>
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link to="/dashboard">
              {dashboardItem.icon}
              <span>{dashboardItem.name}</span>
            </Link>
          </li>
        </ul>

        {/* Other Sections */}
        {sections.map((section, index) => (
          <div key={index}>
            {section.title && <h4 className="group-name">{section.title}</h4>}
            {section.items && (
              <ul>
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Footer for logout */}
        <div className="nav-footer">
          {/* <hr /> */}

          <a href="/">
            <LogoutIcon />
            <span>Logout</span>
          </a>

          <p>v1.2.0</p>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
