import { BackIcon } from "../assets/svg";
import "../styles/userdetailsheader.scss";
import profile from "../assets/profile.png";
import { User } from "../types";
import { useParams } from "react-router-dom";
import users from "../data/users.json";
import UserDetailsNav from "./UserDetailsNav";

interface UserDetailsProps {
  user: User;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const UserDetailHeader: React.FC<UserDetailsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { userId } = useParams<{ userId: string }>();
  const userData = users.find((u) => u.userId === userId);

  if (!userData) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-details-header">
      <div className="back-btn">
        <div onClick={() => history.back()} style={{ cursor: "pointer" }}>
          <BackIcon />
        </div>
        <p>Back to all Users</p>
      </div>

      <div className="user-details-header-actions">
        <h2>User Details</h2>

        <div>
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>

      <div className="user-details-header-info">
        <div className="user-details-profile">
          <div className="user-details-profile-info">
            <div className="user-details-image-holder">
              <img src={profile} alt="user-details-profile-image" />
            </div>

            <div>
              <h2>{userData?.personalInfo?.fullName || "Unknown User"}</h2>
              <p>{userData?.userTag}</p>
            </div>
          </div>

          <div className="user-tier">
            <h2>User's Tier</h2>
            <p>{userData?.tier}</p>
          </div>

          <div>
            <h2>{userData?.accountBalance || "₦0.00"}</h2>

            <p>
              {userData?.bankDetails?.accountNumber || "0000000000"}/
              {userData.bankDetails.bankName || "No bank"}
            </p>
          </div>
        </div>
      </div>

      <div>
        <UserDetailsNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};
