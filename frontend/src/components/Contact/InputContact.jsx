import React from "react";
import PropTypes from "prop-types";

function InputContact({ label, name, type, onChange, value }) {
  return (
    <label>
      <span className="label-text-form-contact">{label}</span>
      <input
        className="input"
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </label>
  );
}
InputContact.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default InputContact;
