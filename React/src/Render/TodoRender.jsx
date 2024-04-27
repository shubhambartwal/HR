import React, { useEffect, useState } from "react";
import axios from 'axios';
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
    axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`).then(async function (res){
        // const json=await res.json()
 setTodos(res.data.todos);       
})
},[id])
  return <div>
    {id}
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
