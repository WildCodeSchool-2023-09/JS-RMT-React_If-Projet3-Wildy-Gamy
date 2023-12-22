import "../style/components/InputSearchBar.scss";
import PropTypes from "prop-types";

function InputSearchBar({ setSearch, search, data }) {
  const handleSearch = (e) => {
    const result = e.target.value;
    setSearch(result);
  };
  if (search.length > 0) {
    data.filter((users) => {
      return users.username.match(search);
    });
  }

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
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  data: PropTypes.arrayOf().isRequired,
};
export default InputSearchBar;
