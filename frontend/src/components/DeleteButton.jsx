import "../style/components/DeleteButton.scss";
import PropTypes from "prop-types";

function DeleteButton({ onClick }) {
  return (
    <div>
      <button type="button" className="delete-button" onClick={onClick}>
        Delete
      </button>
    </div>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
