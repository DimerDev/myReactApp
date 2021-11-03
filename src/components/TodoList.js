import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList  = ({ todos }) => {
  

   return (
    <ul>
      {todos.map(item => <TodoListItem key={item.text} {...item}/>)}
    </ul>
   );
};

export default TodoList;