import React from "react";
import PropTypes from "prop-types";
import trophy from "../../assets/trophy.svg";

function Rancking({ rang, color }) {
  return (
    <div className="ranckingContainer">
      <div>
        <h2>
          Division <span>{rang}</span>
        </h2>
      </div>
      <hr />
      <div>
        <img
          src={trophy}
          width={105}
          alt="trophée"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

Rancking.propTypes = {
  rang: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Rancking;
