import "../style/components/InputSearchBar.scss";

function InputSearchBar() {
  return (
    <div className="search-container">
      <input className="search-bar" type="text" placeholder="Search..." />
    </div>
  );
}

export default InputSearchBar;
