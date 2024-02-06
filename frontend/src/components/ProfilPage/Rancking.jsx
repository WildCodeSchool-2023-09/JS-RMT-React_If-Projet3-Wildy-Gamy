import React from "react";
import PropTypes from "prop-types";

function Rancking({ rang, trophy }) {
  return (
    <div className="ranckingContainer">
      <div>
        <h2>
          Division <span>{rang}</span>
        </h2>
      </div>
      <hr />
      <div>
        <img src={trophy} width={105} alt="trophée" />
      </div>
    </div>
  );
}

Rancking.propTypes = {
  rang: PropTypes.string.isRequired,
  trophy: PropTypes.string.isRequired,
};

export default Rancking;
