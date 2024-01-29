import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputComponents from "../../components/input/InputComponents";
import connexion from "../../services/connexion";
import { AuthContext } from "../../../context/AuthContext";

function Login() {
  const { setConnected } = useContext(AuthContext);
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">connexion</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
