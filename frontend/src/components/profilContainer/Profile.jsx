import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import convertTime from "../../services/convertTime";
import cupColors from "../../services/cupColors";
import division from "../../services/divisions";

function ProfilContainer() {
  const { profil, connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.username && profil) {
    return (
      <div className="info-profil-container">
        <div className="user-info">
          <img
            className="avatar-profil"
            src={profil.avatar}
            alt={profil.alt}
            width={40}
          />
          <p className="userName">{connected.login.username}</p>
        </div>
        <div className="profil-container">
          <div className="division">
            <h3>Division {division(connected.wonGames.wonGames)}</h3>
          </div>
          <div className="member">
            <p>MEMBRE DEPUIS</p>
            <p>{convertTime(profil.createdat)}</p>
          </div>
          <div className="cupColors">
            <img
              src={cupColors(connected.wonGames.wonGames)}
              alt="trophée expérience"
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ProfilContainer;
