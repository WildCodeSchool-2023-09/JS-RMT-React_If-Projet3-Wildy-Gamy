import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import InfoProfil from "../components/ProfilPage/InfoProfil";
import Rancking from "../components/ProfilPage/Rancking";
import ProfilBio from "../components/ProfilPage/ProfilBio";

import division from "../services/divisions";
import cupColors from "../services/cupColors";
import convertTime from "../services/convertTime";

function ProfilPage() {
  const { profil, connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.username && profil) {
    return (
      <div className="profilPageContainer">
        <div className="ranckingContainerPage">
          <Rancking
            rang={division(connected.wonGames.won_count)}
            trophy={cupColors(connected.wonGames.won_count)}
          />
        </div>
        <div className="infoProfilContainer">
          <InfoProfil
            time={convertTime(profil.createdat)}
            timePlayed={connected.timePerPLayer.time}
            numberPlayed={connected.wonGames.totalGames}
            numberWon={connected.wonGames.wonGames}
          />
        </div>
        <div>
          <ProfilBio
            img={profil.avatar}
            username={connected.login.username}
            bio={profil.bio}
          />
        </div>
      </div>
    );
  }
}

export default ProfilPage;
