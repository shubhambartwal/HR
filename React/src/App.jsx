import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/Todo/CreateTodo";
import Todos from "./components/Todo/Todos";

function App() {
  const [todos,setTodos]=useState([])
  fetch('http://localhost:5000/todos').then(async (response)=> 
  {const json=await response.json();
  setTodos(json.todos)
  }
  )
  return (
    <div>
      {/*<Counter/>*/}
      <CreateTodo />
      <Todos
        todos={todos}
        // todos={[]}
      />
    </div>
  );
}

export default App;
