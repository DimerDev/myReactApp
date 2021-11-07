import React from "react";
import { useState } from "react/cjs/react.development";

import AddFormItem from "../AddFormItem/AddFormItem";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {

  let startId = 5; 

  const [todoData ,setTodoData] = useState({
      todoItem: [
      { text: 'Drink Coffe', important: false, id: 1 },
      { text: 'Make App', important: true, id: 2 },
      { text: 'Dinner', important: false, id: 3 },
    ]
  });
  
  const deleteItem = (id) => {
    setTodoData(({todoItem}) => {
      const arr = todoItem.filter((elem)=> elem.id !== id );
      return {
        todoItem : arr
      }
    });
  }

  const addItem = (text) => {
    const newTask = {
      text: text,
      important: false,
      id: ++startId + text
    }
    setTodoData(({todoItem}) => {
      const arr = todoItem;
      arr.push(newTask)
      return {
        todoItem : arr
      }
    });
  };

  return (
    <div className="container justify-content-center mt-5">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <AppHeader />
          <SearchPanel />
          <TodoList
            todos= {todoData}
            onDeleted= {(id) => deleteItem(id)} />
            <AddFormItem onAdded ={(text)=> addItem(text)} />  
        </div>
        <div className="col-sm-3"></div>
      </div>  
    </div>
  );
};

export default App;