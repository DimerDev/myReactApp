import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList  = ({ todos }) => {
  

   return (
    <ul className=" list-group pl-0 ">
      {todos.map(item => <TodoListItem  key={item.text} {...item}/>)}
    </ul>
   );
};

export default TodoList;