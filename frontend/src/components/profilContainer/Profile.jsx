import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import convertTime from "../../services/convertTime";
import division from "../../services/divisions";

function ProfilContainer() {
  const { profil, connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.username) {
    return (
      <div style={{ color: "white" }} className="profil-container">
        <div style={{ display: "flex" }} className="user-info">
          <div>
            <img src={profil.avatar} alt={profil.alt} width={40} />
          </div>
          <p>{connected.login.username}</p>
        </div>
        <div>
          <h3>Division {division(connected.wonGames.won_count)}</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>MEMBRE DEPUIS</span>
          <p>{convertTime(profil.createdat)}</p>
        </div>
      </div>
    );
  }
}

export default ProfilContainer;
