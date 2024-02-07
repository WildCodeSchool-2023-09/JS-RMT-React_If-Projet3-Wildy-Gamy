import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons8-user-70.png";
import { AuthContext } from "../../../context/AuthContext";

function InputProfil() {
  const { connected, profil } = useContext(AuthContext);
  if (connected && connected.login && profil) {
    return (
      <Link to="/profil">
        <span>
          <img style={{ marginTop: "7px" }} src={logo} alt="profilimage" />
        </span>
      </Link>
    );
  }
  return "";
}

export default InputProfil;
