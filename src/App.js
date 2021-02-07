import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ListTask from './components/ListTask/ListTask'
import AddTask from './components/AddTask/AddTask';
import FilterTodo from './components/FilterTodo/FilterTodo'

function App() {
    const [done, setDone] = useState(false);
    const [unDone, setUndone] = useState(false);
  return (
    <div className="App">
         <AddTask />
      <div style={{ textAlign: "center" }}>
        <FilterTodo setDone={setDone} setUndone={setUndone} />
      </div>

      <ListTask done={done} unDone={unDone} />
    </div>
  );
}

export default App;
