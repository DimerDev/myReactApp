import React from "react";

const SearchPanel = () => {
   return (
     <div className="input-group mb-3 lign-items-center">
      <input type="text" className="form-control" placeholder="search" />
      <div className="input-group-append">
        <button type="button" className="btn btn-info">All</button>
        <button type="button" className="btn btn-light">Active</button>
        <button type="button" className="btn btn-light">Done</button>
      </div>
    </div>
   );
 };


export default SearchPanel;