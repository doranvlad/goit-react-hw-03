import s from "./SearchBox.module.css";

function SearchBox({ search, handleSearch }) {
  return (
    <div>
      <label htmlFor="searchInput">
        {" "}
        find contacts by name
        <input
          type="text"
          value={search}
          id="searchInput"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}

export default SearchBox;
