import { Link } from "react-router-dom";

import AdminButton from "../input/AdminButton";
import InputProfil from "../input/InputProfil";
import logo from "../../assets/logo2.png";
import ButtonConected from "../input/ButtonConected";

function Header() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img style={{ marginLeft: "15px" }} src={logo} alt="logo" width={50} />
      </Link>
      <div className="mainHeaderContainer">
        <ButtonConected />
        <div className="mainHeaderContent">
          <InputProfil />
          <AdminButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
