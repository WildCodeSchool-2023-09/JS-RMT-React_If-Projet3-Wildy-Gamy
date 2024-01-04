import PropTypes from "prop-types";
import "../style/components/InputSearchBar.scss";

function InputSearchBar({ setSearch }) {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
InputSearchBar.propTypes = {
  setSearch: PropTypes.string.isRequired,
}.isRequired;

export default InputSearchBar;
