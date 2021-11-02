import React from "react";

const TodoListItem = ({ todos }) => {
   return(
      <ul>
         {todos.map(item => <li key={item.text}>{item.text}</li>)}
      </ul>
   );
};

export default TodoListItem;