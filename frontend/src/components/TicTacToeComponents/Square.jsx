import React from "react";
import PropTypes from "prop-types";

function Square({ value, onClick }) {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func.isRequired,
};

Square.defaultProps = {
  value: null,
};

export default Square;
