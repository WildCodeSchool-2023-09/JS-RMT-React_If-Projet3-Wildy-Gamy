import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import ButtonConected from "../input/ButtonConected";
import InputProfil from "../input/InputProfil";
import AdminButton from "../input/AdminButton";

function Header() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img src={logo} alt="logo" width={50} style={{ marginLeft: "25px" }} />
      </Link>
      <InputProfil />
      <AdminButton />
      <ButtonConected />
    </div>
  );
}

export default Header;
