import { User } from "../types";
import "../styles/emptydetails.scss";

interface EmptyDetailsProps {
  user: User;
}

export default function EmptyDetails({ user }: EmptyDetailsProps) {
  return (
    <div className="empty-details">
      <h2>{user.username} doesn't have any additional details yet</h2>
      <p>Lets work together to get users loans</p>
    </div>
  );
}
