import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList  = ({ todos }) => {
   return (
     <TodoListItem todos = {todos} />
   );
};

export default TodoList;