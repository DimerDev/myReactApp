import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList  = ({todos, onDeleted, onDone, onImportant}) => {
  //console.log(todos);
   return (
    <ul className="list-group">
      {todos.map(item => 
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