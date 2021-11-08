import React from "react";

const TodoListItem = ({ text, important, done, onDeleted, onDone, onImportant }) => {
   
   let iconStyle = {
      fontSize:"150%",
      color: "#3d4a8f"
   };     
   let classNames = 'list-group-item';
   const complete = ' list-group-item-success';
   const importantClass = ' font-weight-bold text-danger';
   if (done) classNames += complete;
   if (important) classNames += importantClass;

  
   return(
      <span className={classNames} >
         <span onClick={onDone}>{text}</span>
            <button
               type="button"
               className="btn float-end"
               onClick={onDeleted}>
               <i className="bi bi-trash" style={iconStyle}></i>
            </button>
            <button type="button"
            className="btn float-end"
            onClick={onImportant}>
               <i className="bi bi-shield-fill-exclamation" style={iconStyle}></i>
            </button>
      </span>
   );
};

export default TodoListItem; 