import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList  = ({todos, onDeleted}) => {

   return (
    <ul className=" list-group pl-0 ">
      {todos.todoItem.map(item => 
      <TodoListItem 
        key={item.id}
        {...item}
        onDeleted ={()=> onDeleted(item.id)}
        />
        )}
    </ul>
   );
};

export default TodoList;