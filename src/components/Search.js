import React from "react";

function Search({searchTerm, onSearch}) {
  

 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
      onChange={onSearch}
      value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        
      />
    </div>
  );
}

export default Search;
