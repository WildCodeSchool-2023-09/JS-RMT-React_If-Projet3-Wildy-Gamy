import PropTypes from "prop-types";

function InputComponents({ label, name, type, onChange, value }) {
  return (
    <label>
      <span className="label-text-form-contact">{label}</span>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </label>
  );
}

InputComponents.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InputComponents;
