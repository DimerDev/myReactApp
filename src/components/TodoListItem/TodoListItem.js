import React, { useState } from "react";

const TodoListItem = ({ text }) => {

   const [ item, setDone ] = useState({
      done : false,
      important: false 
   });
   
   let classNames = 'list-group-item justify-content-center pb-4';
   const complete = ' list-group-item-success';
   if (item.done) classNames += complete;

   const handleDone = () => {
      if (item.done){
         setDone({
            done:false,
            important: false
         });
      }else {
         setDone({
            done:true,
            important: false
         });
      }
   };

   return(
      <span>
         <li className={classNames} onClick={handleDone}>{text}
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