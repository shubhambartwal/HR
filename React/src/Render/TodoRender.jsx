import React, { useEffect, useState } from "react";

const TodoRender = ({id}) => {
  const [todos, setTodos] = useState([]);
//   useEffect(() => {
//   setInterval(()=>fetch(`https://sum-server.100xdevs.com/todos`)
//   .then( async function  ( res){
//     const json=await res.json();
//     setTodos(json.todos)
// }),[3000])  
// }
//   , []);

useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todos?id=${id}`).then(async function (res){
        const json=await res.json()
 setTodos(json.todos);       
})
},[])
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
