import { BackIcon } from "../assets/svg";
import "../styles/userdetailsheader.scss";
import profile from "../assets/profile.png";
import UserDetailsNav from "./UserDetailsNav";
import { User } from "../types";
import { useParams } from "react-router-dom";
import users from "../data/users.json";

interface UserDetailsProps {
  user: User;
}

export const UserDetailHeader: React.FC<UserDetailsProps> = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = users.find((u) => u.userId === userId);

  if (!user) {
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
              <h2>{user?.personalInfo?.fullName || "Unknown User"}</h2>
              <p>FQSuhf8r94</p>
            </div>
          </div>

          <div className="user-tier">
            <h2>User's Tier</h2>
            <p>{user?.tier}</p>
          </div>

          <div>
            <h2>{user?.accountBalance || "₦0.00"}</h2>

            <p>
              {user?.bankDetails?.accountNumber || "0000000000"}/
              {user.bankDetails.bankName || "No bank"}
            </p>
          </div>
        </div>

        <div>
          <UserDetailsNav />
        </div>
      </div>
    </div>
  );
};
