import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Admin from "../../assets/icons8-admin-55.png";

function AdminButton() {
  const { connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.role_id === 2) {
    return (
      <Link style={{ color: "white" }} className="buttonAdmin" to="/admin/user">
        <img style={{ marginTop: "2px" }} src={Admin} alt="icone admin" />
      </Link>
    );
  }
  return null;
}

export default AdminButton;
