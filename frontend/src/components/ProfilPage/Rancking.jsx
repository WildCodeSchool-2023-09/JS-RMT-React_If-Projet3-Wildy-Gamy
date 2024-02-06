import React from "react";
import PropTypes from "prop-types";

function Rancking({ rang, color }) {
  return (
    <div className="ranckingContainer">
      <div>
        <h2>
          Divison <span>{rang}</span>
        </h2>
      </div>
      <hr />
      <div>{color}</div>
    </div>
  );
}
Rancking.propTypes = {
  rang: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rancking;
