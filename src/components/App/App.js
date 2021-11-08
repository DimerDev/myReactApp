import React from "react";
import { useState } from "react/cjs/react.development";

import AddFormItem from "../AddFormItem/AddFormItem";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {

  let startId = 5; 

  const [todoData ,setTodoData] = useState({
      todoItems: [
      { text: 'Drink Coffe', important: false, done: false, id: 1 },
      { text: 'Make App', important: true, done: false, id: 2 },
      { text: 'Dinner', important: false, done: false, id: 3 },
    ]
  });
  
  const deleteItem = (id) => {
    setTodoData(({todoItems}) => {
      const arr = todoItems.filter((elem)=> elem.id !== id );
      return {
        todoItems : arr
      }
    });
  }

  const addItem = (text) => {
    const newTask = {
      text: text,
      important: false,
      done: false,
      id: ++startId + text
    }
    setTodoData(({todoItems}) => {
      const arr = todoItems;
      arr.push(newTask)
      return {
        todoItems : arr
      }
    });
  };

  const onToggleDone = (id) => {
    setTodoData(({todoItems})=>{
      const arr = todoItems.map(item => {
        if(item.id === id) item.done = !item.done;
        return item;
      });
      return {
        todoItems : arr
      }
    });
  };

  const onToggleImportant = (id) => {
    setTodoData(({todoItems})=> {
      const arr = todoItems.map(item => {
        if (item.id === id) item.important = !item.important;
        return item;
      });
      return {
        todoItems : arr
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
            onDeleted= { (id) => deleteItem(id) }
            onDone = { (id) => onToggleDone (id) }
            onImportant = { (id) => onToggleImportant(id) }/>
            <AddFormItem onAdded ={(text) => addItem(text) } />  
        </div>
        <div className="col-sm-3"></div>
      </div>  
    </div>
  );
};

export default App;