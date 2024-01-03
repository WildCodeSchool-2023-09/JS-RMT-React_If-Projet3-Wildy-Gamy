import "../style/components/InputSearchBar.scss";
import PropTypes from "prop-types";

function InputSearchBar({ setSearch }) {
  const handleSearch = (e) => {
    const result = e.target.value;
    setSearch(result);
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
}
InputSearchBar.propTypes = {
  setSearch: PropTypes.string.isRequired,
}.isRequired;

export default InputSearchBar;
