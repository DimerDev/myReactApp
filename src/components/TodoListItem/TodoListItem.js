import React, { useState } from "react";

const TodoListItem = ({ text }) => {

   const [ item, setItem ] = useState({
      done: false,
      important: false 
   });
         
   let classNames = 'list-group-item justify-content-center';
   const complete = ' list-group-item-success';
   const important = ' font-weight-bold text-danger';
   if (item.done) classNames += complete;
   if (item.important) classNames += important;

   const handleDone = () => {
      setItem(({done})=> {   
         return{
         done: !done
         };
      });
   };
   
   const hadleImportant = () => {
      setItem(({important})=> {
         return {
            important: !important
         };
      });
   };

   return(
      <span className={classNames} >
         <span onClick={handleDone}>{text}</span>
            <button type="button" className="btn float-right">
               <i className="fas fa-trash fa-1x"></i>
            </button>
            <button type="button" className="btn float-right" onClick={hadleImportant}>
               <i className="fas fa-exclamation-triangle"></i>
            </button>
         
      </span>
   );
};

export default TodoListItem; 