import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserDetailHeader } from "../components/UserDetailsHeader";
import GeneralDetails from "../components/GeneralDetails";
import "../styles/userdetails.scss";
import DashboardLayout from "../components/DashboardLayout";
import EmptyDetails from "../components/EmptyDetails";

const UserDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  // Retrieve the user data from localStorage
  const selectedUser = JSON.parse(
    localStorage.getItem("selectedUser") || "null"
  );

  // Check if the selected user matches the userId in the URL
  const user =
    selectedUser && selectedUser.userId === userId ? selectedUser : null;

  // Debugging: Check the user object
  // console.log("Selected User:", selectedUser);
  // console.log("User from URL:", user);

  useEffect(() => {
    if (!user) {
      console.log("User not found, redirecting to dashboard");
      navigate("/users"); // Redirect to users dashoboard if user is not found
    }
  }, [user, navigate]);

  return (
    <DashboardLayout>
      <div className="user-details">
        <div className="user-details-head">
          <UserDetailHeader
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="tab-content">
          {activeTab === "general" && <GeneralDetails user={user} />}
          {activeTab === "documents" && <EmptyDetails user={user} />}
          {activeTab === "bank" && <EmptyDetails user={user} />}
          {activeTab === "loans" && <EmptyDetails user={user} />}
          {activeTab === "savings" && <EmptyDetails user={user} />}
          {activeTab === "app" && <EmptyDetails user={user} />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDetails;
