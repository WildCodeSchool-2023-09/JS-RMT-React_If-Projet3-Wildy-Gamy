import React from "react";
import logo from "../../assets/logo.png";
import ButtonConected from "../input/ButtonConected";
import InputProfil from "../input/InputProfil";
import AdminButton from "../input/AdminButton";

function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} alt="logo" width={100} />
      <ButtonConected />
      <InputProfil />
      <AdminButton />
    </div>
  );
}

export default Header;
