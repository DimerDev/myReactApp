import React from "react";
import { useState } from "react/cjs/react.development";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {

  const [todoData ,setTodoData] = useState({
      todoItem: [
      { text: 'Drink Coffe', important: false, id: 1 },
      { text: 'Make App', important: true, id: 2 },
      { text: 'Dinner', important: false, id: 3 },
    ]
  });
  
  const deleteListItem = (id) => {
    setTodoData(({todoItem}) => {
      const arr = todoItem.filter((elem)=> elem.id !== id );
      return {
        todoItem : arr
      }
    });
  }
  return (
    <div className="container justify-content-center mt-5">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <AppHeader />
        <SearchPanel />
        <TodoList
          todos= {todoData}
          onDeleted= {(id) => deleteListItem(id)} />
        </div>
        <div className="col-sm-3"></div>
      </div>  
    </div>
  );
};

export default App;