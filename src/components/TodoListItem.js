import React from "react";

const TodoListItem = ({ text, important }) => {

   

   const style = {
      color: important ? 'red' : 'Black'
   };

   return(
      <span>
         <li style={style} className="list-group-item justify-content-center pb-4">{text}
            <button type="button" className="btn float-right">
               <i className="fas fa-trash fa-1x"></i>
            </button>
            <button type="button" className="btn float-right ">
               <i className="fas fa-exclamation-triangle"></i>
            </button>
         </li>
      </span>
   );
};

export default TodoListItem; 