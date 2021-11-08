import React from "react";

const TodoListItem = ({ text, important, done, onDeleted, onDone, onImportant }) => {
   

         
   let classNames = 'list-group-item justify-content-center';
   const complete = ' list-group-item-success';
   const importantClass = ' font-weight-bold text-danger';
   if (done) classNames += complete;
   if (important) classNames += importantClass;

  
   return(
      <span className={classNames} >
         <span onClick={onDone}>{text}</span>
            <button
               type="button"
               className="btn float-right"
               onClick={onDeleted}>
               <i className="fas fa-trash fa-1x"></i>
            </button>
            <button type="button" className="btn float-right" onClick={onImportant}>
               <i className="fas fa-exclamation-triangle"></i>
            </button>
      </span>
   );
};

export default TodoListItem; 