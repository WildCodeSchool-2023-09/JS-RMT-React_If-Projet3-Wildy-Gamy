import React from "react";
import logo from "../../assets/logo.png";
import ButtonConected from "../input/ButtonConected";

function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} alt="logo" width={100} />
      <ButtonConected />
    </div>
  );
}

export default Header;
