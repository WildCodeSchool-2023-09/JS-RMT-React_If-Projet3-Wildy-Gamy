import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputComponents from "../../components/input/InputComponents";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      toast.error("Erreur lors de l'inscription");
    }
  };

  return (
    <>
      <div className="container">
        <h3>Creation de compte</h3>
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
            type="text"
            onChange={handleChange}
            value={formValue.password}
            minLength={6}
            maxLength={25}
          />
        </form>
      </div>
      <div className="inputSubmitContainer">
        <input className="inputSubmit" type="submit" value="Inscription" />
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;