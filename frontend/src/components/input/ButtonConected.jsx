import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import connexion from "../../services/connexion";

function ButtonConected() {
  const { connected } = useContext(AuthContext);
  const reload = async () => {
    try {
      await connexion.post("/logout");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
    window.location.reload();
  };
  return (
    <div>
      {connected.login && (
        <div>
          <button onClick={reload} className="disconnectedButton" type="button">
            Deconnexion
          </button>
        </div>
      )}
      {!connected.login && (
        <Link to="/login">
          <button className="connexionButton" type="button">
            Connexion
          </button>
        </Link>
      )}
    </div>
  );
}

export default ButtonConected;
