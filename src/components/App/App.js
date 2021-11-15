import React from "react";
import { useState } from "react/cjs/react.development";

import AddFormItem from "../AddFormItem/AddFormItem";
import AppHeader from "../AppHeader/AppHeader";
import ItemStatusButtons from "../ItemStatusButtons/ItemStatusButtons";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

let startId = 100; 

const App = () => {

  const createItem = (text) => {
    const newItem = {
      text: text,
      important: false,
      done: false,
      id: ++startId
    };
    return newItem
  };

  const [todoData ,setTodoData] = useState(
    {
      todoItems: [
        createItem('Drink Coffe'),
        createItem('Make App'),
        createItem('Dinner')
    ],
      filterItems: 'all',
      searchText: ''
    }
  );

  const updateState = (newItems = todoData.todoItems, filterItems = 'all', searchText='') => {
    const newState = {
      todoItems: newItems,
      filterItems: filterItems,
      searchText: searchText
    };
    setTodoData((todoData) => {
      return newState
    })
  }; 

  const onToggleDone = (id) => {
    const arr = todoData.todoItems.map(item => {
      if(item.id === id) item.done = !item.done;
      return item;
    });
    updateState(arr);
  };
  
  const deleteItem = (id) => {
    const newItems = todoData.todoItems.filter((elem)=> elem.id !== id );
    updateState(newItems)
  };

  const addItem = (text) => {
    const item = createItem(text);
    const todoItems = todoData.todoItems;
    todoItems.push(item);
    updateState(todoItems);
  };

  const onToggleImportant = (id) => {
    const newItems = todoData.todoItems.map(item => {
      if (item.id === id) item.important = !item.important;
      return item;
    });
    updateState(newItems);
  };
  const {todoItems, filterItems, searchText} = todoData;

  const buttonFilter = (buttonName) => {
    updateState(undefined, buttonName, undefined);
  };
  

  const filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active' :
        return items.filter((item) => !item.done);
      case 'done' :
        return items.filter((item) => item.done);
      default :
        return items;
    };
  };
  
  
  const visibleItems = filter(todoItems, filterItems);

  return (
    <div className="container justify-content-center mt-5">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <AppHeader />
          <div className="input-group mb-1">
            <SearchPanel />
            <ItemStatusButtons
              onToggle={(buttonName) => buttonFilter(buttonName)} />
          </div>
          <TodoList
            todos= {visibleItems}
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