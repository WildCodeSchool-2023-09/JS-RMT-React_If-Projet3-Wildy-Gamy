import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";

function InfoGame() {
  const info = useLoaderData();

  return (
    <div>
      <LeaderBoard />
      <img src={info.image} alt={info.alt} />
      <h2>{info.name}</h2>
      <h3>Détail du jeu:</h3>
      <p>{info.description}</p>
      <Link to="/tictactoe">JOUER</Link>
    </div>
  );
}

export default InfoGame;
