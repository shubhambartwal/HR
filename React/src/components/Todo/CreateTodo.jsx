import React,{useState} from "react";

const CreateTodo = (props) => {
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
  return (
    <div>
      <input
        id="title"
        type="text"
        style={{ padding: 10, margin: 10 }}
        placeholder="title"
        onChange={(event)=>setTitle(event.target.value)}
      />{" "}
      <br />
      <input
        id="desc"
        type="text"
        style={{ padding: 10, margin: 10 }}
        placeholder="description"
        onChange={(event)=>setDescription(event.target.value)}
      />{" "}
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:5000/todo", {
            method: "POST",
            body:JSON.stringify( {
              title: title,
              description:description,
            }),
            headers:{
                "Content-type":"application/json"
            }
          }).then(async function (res) {
            const json = res.json();
            alert("Todo Added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
