import React from "react";
import './Search.css'
function Search({openModal}) {
  return (
    <div className="search-main">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
         Search
        </button>
        <button type="submit" className="searchButton" onClick={openModal}>
         Add Bhandara of your area
        </button>
      </div>
    </div>
  );
}

export default Search;
