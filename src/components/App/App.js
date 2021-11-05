import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {

  const todoData = [
    { text: 'Drink Coffe', important: false },
    { text: 'Make App', important: true },
    { text: 'Dinner', important: false },
  ];

  return (
    <div className="container justify-content-center mt-5">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <AppHeader />
        <SearchPanel />
        <TodoList todos = {todoData} />
        </div>
        <div className="col-sm-3"></div>
      </div>  
    </div>
  );
};

export default App;