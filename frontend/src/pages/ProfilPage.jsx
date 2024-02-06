import { useContext } from "react";
import Rancking from "../components/ProfilPage/Rancking";
import { AuthContext } from "../../context/AuthContext";
import division from "../services/divisions";
import cupColors from "../services/cupColors";

function ProfilPage() {
  const { profil, connected } = useContext(AuthContext);

  if (connected && connected.login && connected.login.username && profil) {
    return (
      <div className="profilPageContainer">
        <div className="ranckingContainerPage">
          <Rancking
            rang={division(connected.wonGames.won_count)}
            color={cupColors(connected.wonGames.won_count)}
          />
        </div>
      </div>
    );
  }
}

export default ProfilPage;
