import React, { useState } from "react";
import './Search.css'
function Search({openModal,searchByValue}) {

  // const [searchInput,setSearchInput] = useState()

  function changeHandler(event){
   
// setSearchInput(event.target.value)
      searchByValue(event.target.value)
  }
  return (
    <div className="search-main">
      <div className="search">
        <input
        name="search"
          type="text"
          className="searchTerm"
          placeholder="Search by city"
          // value={searchInput}
          onChange={changeHandler}
        />
        <button id="search" type="submit" className="searchButton">
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
