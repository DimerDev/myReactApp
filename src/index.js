import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {

  const todoData = [
    { text: 'Drink Coffe', important: false },
    { text: 'Make App', important: true },
    { text: 'Dinner', important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos = {todoData} />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));