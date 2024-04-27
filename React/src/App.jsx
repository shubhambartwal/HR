import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/Todo/CreateTodo";
import Todos from "./components/Todo/Todos";
import Toplevel from "./components/Basics/Toplevel";
import Todo from "./components/Basics/Todo";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import TodoRender from "./Render/TodoRender";

function App() {
  // const [todos,setTodos]=useState([])
  // fetch('http://localhost:5000/todos').then(async (response)=>
  // {const json=await response.json();
  // setTodos(json.todos)
  // }
  // )
  return (
    <div>
      {/*<Counter/>*/}
      {/* <CreateTodo />
       <Todos
      //   todos={todos}
  // todos={[]}
  />*/}

      {/*<Toplevel/>*/}

      {/*<Todo/>*/}
      {/*<CardWrapper />*/}
      <TodoRender id={1}/>
    </div>
  );
}

export default App;
