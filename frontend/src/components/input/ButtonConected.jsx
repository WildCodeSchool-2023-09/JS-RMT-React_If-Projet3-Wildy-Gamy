import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function ButtonConected() {
  const { connected } = useContext(AuthContext);
  const reload = () => {
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
