import React from "react";

const TodoListItem = ({ text, important }) => {

   

   const style = {
      color: important ? 'red' : 'Black'
   };

   return(
      <li style={style}>{text}</li>
   );
};

export default TodoListItem; 