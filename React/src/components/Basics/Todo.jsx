import React, { useState, useRef } from "react";

const Todo = () => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const [todo, setTodo] = useState([
    { title: "a", description: "b" },
    { title: "c", description: "d" },
    { title: "e", description: "f" },
  ]);
  const addTodo = () =>
    setTodo([...todo, {
      title: titleInputRef,
      description: descriptionInputRef,
    }]);
  console.log( todo);
 
  return (
    <div>
      <button onClick={addTodo}>Add a new todo</button>
      <input type="text" ref={titleInputRef} placeholder="title" />
      <input type="text" ref={descriptionInputRef} placeholder="description" />
      {todo.map((item)=><RenderTodo title={item.title} description={item.description}/>)}
    </div>
  );
};

export default Todo;
 
 const RenderTodo = ({title,description}) => {
   return (
     <div><h1>{title}</h1><h2>{description}</h2></div>
   )
 }
 
 export { RenderTodo}