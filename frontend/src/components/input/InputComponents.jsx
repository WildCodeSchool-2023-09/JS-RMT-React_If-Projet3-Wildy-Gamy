import PropTypes from "prop-types";

function InputComponents({
  label,
  name,
  type,
  onChange,
  value,
  minLength,
  maxLength,
}) {
  return (
    <label className="inputComponentLabel">
      <span className="labelSignup">{label}</span>
      <input
        className="inputSignup"
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
        minLength={minLength}
        maxLength={maxLength}
      />
    </label>
  );
}

InputComponents.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  minLength: PropTypes.number.isRequired,
};

export default InputComponents;
