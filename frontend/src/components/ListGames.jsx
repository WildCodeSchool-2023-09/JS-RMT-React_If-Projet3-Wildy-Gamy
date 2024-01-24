import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ListGames({ games }) {
  return (
    <div className="all-game-list">
      <h2 className="game-available">Les jeux disponibles</h2>
      <div className="game-list">
        {games.map((e) => (
          <Link to={`/games/${e.id}`} key={e.id}>
            <img className="size-image-list" src={e.image} alt={e.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
}

ListGames.propTypes = {
  data: PropTypes.array.isRequired,
}.isRequired;

export default ListGames;
