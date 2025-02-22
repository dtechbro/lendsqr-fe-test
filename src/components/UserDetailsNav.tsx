import "../styles/userdetailsnav.scss";
import { useLocation } from "react-router-dom";

export default function UserDetailsNav() {
  const location = useLocation();
  const defaultActivePath = "/user-details";

  const navList = [
    { name: "General Details", path: "/users/:userId" },
    { name: "Documents", path: "/empty" },
    { name: "Bank Details", path: "/empty" },
    { name: "Loans", path: "/empty" },
    { name: "Savings", path: "/empty" },
    { name: "App and System", path: "/empty" },
  ];

  return (
    <div className="user-details-nav">
      <ul>
        {navList.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.path}
              className={location.pathname === item.path || (location.pathname === "/" && item.path === defaultActivePath) ? "active" : ""}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
