import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <Square key={id} value={square} onClick={() => onClick(id)} />
      ))}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
