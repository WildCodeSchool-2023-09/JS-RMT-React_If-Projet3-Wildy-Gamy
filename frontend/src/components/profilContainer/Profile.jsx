import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import convertTime from "../../services/convertTime";
import cupColors from "../../services/cupColors";
import division from "../../services/divisions";

function ProfilContainer() {
  const { profil, connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.username) {
    return (
      <div className="info-profil-container">
        <div className="user-info">
          <img
            className="avatar-profil"
            src={profil.avatar}
            alt={profil.alt}
            width={40}
          />
          <p>{connected.login.username}</p>
        </div>
        <div className="profil-container">
          <h3 className="division">
            Division {division(connected.wonGames.won_count)}
          </h3>
          <div className="member">
            <span>MEMBRE DEPUIS</span>
            <p>{convertTime(profil.createdat)}</p>
            <img
              src={cupColors(connected.wonGames.won_count)}
              alt="trophée expérience"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilContainer;
