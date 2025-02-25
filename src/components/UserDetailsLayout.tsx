import { UserDetailHeader } from "./UserDetailsHeader";
import { User } from "../types";
import { useState } from "react";

interface UserDetailsLayoutProps {
  children: React.ReactNode;
  user: User;
}

const UserDetailsLayout: React.FC<UserDetailsLayoutProps> = ({
  children,
  user,
}) => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="">
      {/* header */}
      <UserDetailHeader
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="">{children}</main>
    </div>
  );
};

export default UserDetailsLayout;
