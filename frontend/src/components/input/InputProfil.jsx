import { Link } from "react-router-dom";
import logo from "../../assets/icons8-user-32.png";

function InputProfil() {
  return (
    <Link to="/profil">
      <button type="button">
        <span>
          <img src={logo} alt="profilimage" />
        </span>
      </button>
    </Link>
  );
}

export default InputProfil;
