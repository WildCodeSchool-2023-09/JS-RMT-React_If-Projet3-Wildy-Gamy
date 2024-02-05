import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputComponents from "../../components/input/InputComponents";
import connexion from "../../services/connexion";
import { AuthContext } from "../../../context/AuthContext";
import ImageLogin from "../../assets/imageLogin2.png";

function Login() {
  const { setConnected, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
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
      const validate = await connexion.post("/login", formValue);
      setConnected(validate.data);
      setProfile(validate.data.profil);
      toast.success("vous êtes connectés");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      toast.error("Erreur lors de la connexion");
    }
  };
  return (
    <div className="loginAuthContainer">
      <div className="imageLoginContainer">
        <img
          className="imageLogin"
          src={ImageLogin}
          alt="ceci est l illustration de la page de creation de compte"
        />
      </div>
      <div className="authFormButtonInscriptionContainer">
        <div className="authInscriptionButtonContainer">
          <button className="authInscriptionButton" type="button">
            Inscription
          </button>
        </div>
        <div className="authFormContainer">
          <h3>Connexion au compte</h3>
          <form className="formLoginContainer" onSubmit={handleSubmit}>
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
            <div className="inputConnexionContainer">
              <button className="inputConnexion" type="submit">
                connexion
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
