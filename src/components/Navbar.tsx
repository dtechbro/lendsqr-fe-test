import { AdminDropDownIcon, Logo, SearchIcon } from "../assets/svg";
import avatar from "../assets/avatar.png";
import "../styles/navbar.scss";
import NotificationIcon from "../assets/notification.png";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-side">
        <a href="#">
          <Logo className="logo" />
        </a>

        <div className="search">
          <input type="text" placeholder="Search anything" />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="profile-side">
        <a href="https://adjutor.io/" target="_blank">
          Docs
        </a>

        <img
          src={NotificationIcon}
          alt="notification-icon"
          width={22}
          height={24}
          className="notification"
        />

        <div>
          <img src={avatar} alt="admin-image-placeholder" />
          <h2>Adedeji</h2>
          <AdminDropDownIcon />
        </div>
      </div>
    </nav>
  );
}
