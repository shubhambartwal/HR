import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/Todo/CreateTodo";
import Todos from "./components/Todo/Todos";
import Toplevel from "./components/Basics/Toplevel";
import Todo from "./components/Basics/Todo";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import TodoRender from "./components/Render/TodoRender";
import Counter from "./components/Counter/Counter";
import Memo from "./components/memo/Memo";
import useTodos from "./components/CustomHooks/UseTodos";

function App() {
  const [id,setId]=useState()
  // const [todos,setTodos]=useState([])
  // fetch('http://localhost:5000/todos').then(async (response)=>
  // {const json=await response.json();
  // setTodos(json.todos)
  // }
  // )

  const todos= useTodos()
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

{/*
      <button onClick={()=>setId(1)}>1</button>
      <button  onClick={()=>setId(2)}>2</button>
      <button  onClick={()=>setId(3)}>3</button>
      <button  onClick={()=>setId(4)}>4</button>
      <TodoRender onClick={()=>setId(5)} id={id}/>
*/}

  {/*<Counter/>*/}
  
  {/*<Memo/>*/}
  {todos}
  
  </div>
  );
}

export default App;
