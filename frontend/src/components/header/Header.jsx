import React from "react";
import logo from "../../assets/logo2.png";
import ButtonConected from "../input/ButtonConected";
import InputProfil from "../input/InputProfil";

function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} alt="logo" width={50} />
      <ButtonConected />
      <InputProfil />
    </div>
  );
}

export default Header;
