import React, { useEffect, useState } from "react";

const TodoRender = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then( async function  ( res){
        const json=await res.json();
        setTodos(json.todos)
  })

// setTodos([{"id":4,"title":"Todo 4","description":"This is todo 4","completed":false}])
}
  , []);
  return <div>
    {todos.length}
    {todos.map(item => <Todo key={item.id} item={item} />)}
    
    </div>;
};

export default TodoRender;

const Todo = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
    </div>
  );
};
