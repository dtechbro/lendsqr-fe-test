import { UserDetailHeader } from "./UserDetailsHeader";
import { User } from "../types";

interface UserDetailsLayoutProps {
  children: React.ReactNode;
  user: User;
}

const UserDetailsLayout = ({ children, user }: UserDetailsLayoutProps) => {
  return (
    <div className="">
      {/* header */}
      <UserDetailHeader user={user} />

      {/* Main Content Area */}
      <main className="">{children}</main>
    </div>
  );
};

export default UserDetailsLayout;
