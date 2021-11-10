import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList  = ({todos, onDeleted, onDone, onImportant}) => {
  
   return (
    <ul className="list-group">
      {todos.todoItems.map(item => 
      <TodoListItem 
        key={item.id}
        {...item}
        onDeleted ={ ()=> onDeleted(item.id) }
        onDone = { ()=> onDone(item.id) }
        onImportant = { ()=> onImportant(item.id) }
        />
        )}
    </ul>
   );
};

export default TodoList;