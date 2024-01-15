import React from "react";
import tictactoe from "../assets/tictactoe.jpg";

function ListGames() {
  return (
    <div className="container-games">
      <img src={tictactoe} alt="jeu tictactoes" className="tic" />
    </div>
  );
}

export default ListGames;
