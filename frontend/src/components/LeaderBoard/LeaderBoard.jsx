import { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import profil from "../../assets/icons8-user-70.png";
import LeaderBoardLine from "./LeaderBoardLine";
import LeaderBoardMobile from "./LeaderBoardMobile";

function LeaderBoard() {
  const [player, setPlayer] = useState([]);

  const getBestPlayer = async () => {
    try {
      const res = await connexion.get(`/party?stat=timeperplayer`);
      setPlayer(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBestPlayer();
  }, []);

  return (
    <div className="leaderBoard">
      <div className="leaderBoardMobile">
        <LeaderBoardMobile player={player} profil={profil} alt={alt} />
      </div>
      <div className="LeaderBoard-container">
        <div className="titleRanking">
          <h2>Ranking</h2>
        </div>
        {player.map((el, index) => (
          <LeaderBoardLine
            key={el.id}
            img={profil}
            alt={el.name}
            userName={el.name}
            rang={index}
          />
        ))}
      </div>
    </div>
  );
}

export default LeaderBoard;
