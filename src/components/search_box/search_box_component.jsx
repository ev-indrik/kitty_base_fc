import "./search_box_component_style.css";

const SearchBox = () => {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
