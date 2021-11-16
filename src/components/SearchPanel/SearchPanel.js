import React from "react";

const SearchPanel = ({onSearch}) => {
 
  const handleSearch= (event) => {
    onSearch(event.target.value);
  };

   return (
   <input
    type="text"
    className="form-control"
    placeholder="search"
    onChange={handleSearch}/>
   );
 };


export default SearchPanel;