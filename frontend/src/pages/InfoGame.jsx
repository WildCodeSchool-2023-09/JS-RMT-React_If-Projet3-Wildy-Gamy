import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";

function InfoGame() {
  const info = useLoaderData();

  return (
    <div className="all-page-info-game">
      <LeaderBoard />
      <div className="container-info-game">
        <img className="info-image" src={info.image} alt={info.alt} />
        <div className="name-info">
          <h2 className="name-game">{info.name}</h2>
          <h3 className="detail-game">Détail du jeu:</h3>
          <p className="info-game">{info.description}</p>
        </div>

        <div className="link-go">
          <Link className="go" to="/tictactoe">
            JOUER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoGame;
