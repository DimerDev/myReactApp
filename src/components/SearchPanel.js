import React from "react";

const SearchPanel = () => {
   return (
     <div>
      <input type="text" className="mb-3 " placeholder="search" />
      <div className="ml-3 btn-group btn-group-md">
        <button type="button" className="btn btn-info">All</button>
        <button type="button" className="btn btn-light">Active</button>
        <button type="button" className="btn btn-light">Done</button>
      </div>
    </div>
   );
 };


export default SearchPanel;