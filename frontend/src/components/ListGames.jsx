import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ListGames({ data }) {
  return (
    <div>
      <div className="game-list">
        {data.map((e) => (
          <Link to={`/games/${e.id}`} key={e.id}>
            <img src={e.image} alt={e.alt} />
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
