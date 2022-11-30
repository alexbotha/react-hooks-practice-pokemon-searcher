import React from "react";

function Search({ searchInputFunction }) {
  function onChange(e) {
    searchInputFunction(e);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
