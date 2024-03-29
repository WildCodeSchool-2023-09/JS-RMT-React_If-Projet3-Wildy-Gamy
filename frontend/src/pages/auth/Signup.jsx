import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import InputComponents from "../../components/input/InputComponents";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import ImageLogin from "../../assets/imageLogin2.png";

function Signup() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/players", formValue);
      toast.success("Vous etes inscrit");
      setTimeout(() => {
        handleClick();
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      toast.error("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="loginContainer">
      <div className="imageLoginContainer">
        <img
          className="imageLogin"
          src={ImageLogin}
          alt="ceci est l illustration de la page de creation de compte"
        />
      </div>
      <div className="formContainer">
        <h3>Creation du compte</h3>
        <form className="signupContainer" onSubmit={handleSubmit}>
          <InputComponents
            label="Nom d'utilisateur"
            name="username"
            type="text"
            onChange={handleChange}
            value={formValue.username}
            minLength={3}
            maxLength={25}
          />
          <InputComponents
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formValue.email}
          />
          <InputComponents
            label="Mot de passe"
            name="password"
            type="password"
            onChange={handleChange}
            value={formValue.password}
            minLength={6}
            maxLength={25}
          />
          <div className="inputSubmitContainer">
            <button className="inputSubmit" type="submit">
              Inscription
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
