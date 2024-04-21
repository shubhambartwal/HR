import React, { useRef, useState } from "react";
import "./style.css";
import { v4 as uuid } from "uuid";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);
  function viewItem() {}
  function addItem() {
    const unique_id = uuid();
    const newTodo = {
      id: unique_id,
      task: inputRef.current.value,
    };
    setTodo([...todo, newTodo]);
    console.log(todo);
  }
  function editItem(id) {
    let itemToEditIndex = null;
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === id) {
        itemToEditIndex = i; 
      }
    }
    todo[itemToEditIndex].task=inputRef.current.value;
  }
  function deleteItem(id) {
    let itemToDeleteIndex = null;
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === id) {
        itemToDeleteIndex = i; 
      }
    }
    console.log(itemToDeleteIndex)
    todo.splice(itemToDeleteIndex,1)
  }
  return (
    <div className="container">
      <div className="upperContainer">
        <input type="text" ref={inputRef}></input>
        <button onClick={addItem}>Add</button>
      </div>
      {todo.length
        ? todo.map((item) => (
            <div className="item" key={item.id}>
             
              <h1>{item.task}</h1>
              <button onClick={() => editItem(item.id)}>edit</button>
              <button onClick={() => deleteItem(item.id)}>delete</button>
            </div>
          ))
        : " "}
    </div>
  );
};
export default Todo;
