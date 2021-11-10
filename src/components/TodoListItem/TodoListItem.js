import React from "react";

const TodoListItem = ({ text, important, done, onDeleted, onDone, onImportant }) => {
   
   let iconStyle = {
      fontSize:"150%",
      color: "#3d4a8f"
   };     
   let classNames = 'list-group-item d-flex justify-content-between align-items-center';
   const complete = ' list-group-item-success';
   const importantClass = ' font-weight-bold text-danger';
   if (done) classNames += complete;
   if (important) classNames += importantClass;

  
   return(
      
         <li className={classNames} >
            <div>
           <p className="text-break" onClick={onDone}>{text}</p>
           </div>
           <div>
            <button type="button"
            className="btn justify-content-end"
            onClick={onImportant}>
               <i className="bi bi-shield-fill-exclamation" style={iconStyle}></i>
            </button>
            <button
               type="button"
               className="btn"
               onClick={onDeleted}>
               <i className="bi bi-trash" style={iconStyle}></i>
            </button>
            </div>
            
            </li>
      
   );
};

export default TodoListItem; 