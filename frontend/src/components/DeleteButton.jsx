import PropTypes from "prop-types";
import "../style/components/DeleteButton.scss";

function DeleteButton({ onClick }) {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
