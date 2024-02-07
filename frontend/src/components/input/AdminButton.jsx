import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function AdminButton() {
  const { connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.role_id === 2) {
    return (
      <Link style={{ color: "white" }} className="buttonAdmin" to="/admin/user">
        <p>Admin</p>
      </Link>
    );
  }
  return null;
}

export default AdminButton;
