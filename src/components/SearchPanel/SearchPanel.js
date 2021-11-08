import React from "react";

const SearchPanel = ({todos}) => {
   return (
     <div className="input-group mb-3 lign-items-center">
      <input type="text" className="form-control" placeholder="search" />
      <div className="input-group-append">
        <button type="button" className="btn btn-info">All
          <span className="badge bg-secondary ms-1">{todos.todoItems.length}</span>
        </button>
        <button type="button" className="btn btn-light">Active
          <span className="badge bg-secondary ms-1">1</span>
        </button>
        <button type="button" className="btn btn-light">Done
          <span className="badge bg-secondary ms-1">1</span>
        </button>
      </div>
    </div>
   );
 };


export default SearchPanel;