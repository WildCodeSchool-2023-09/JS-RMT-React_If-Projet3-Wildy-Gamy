import React from "react";
import PropTypes from "prop-types";

function InfoProfil({ time, timePlayed, numberPlayed, numberWon }) {
  return (
    <div className="gridContainer">
      <div className="menberSince">
        <h2>Menbre depuis : {time}</h2>
      </div>
      <div className="leftinfos">
        <p>Temps du jeu :</p>
        <p>{timePlayed}</p>
      </div>
      <div className="rightinfos">
        <p>
          Partie :<span>{numberPlayed}</span>
        </p>
        <p>
          Gagné :<span>{numberWon}</span>
        </p>
      </div>
    </div>
  );
}

InfoProfil.propTypes = {
  time: PropTypes.string.isRequired,
  timePlayed: PropTypes.string.isRequired,
  numberPlayed: PropTypes.number.isRequired,
  numberWon: PropTypes.number.isRequired,
};

export default InfoProfil;
