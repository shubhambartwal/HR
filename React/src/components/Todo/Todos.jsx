import React from 'react'

const Todos = ({todos}) => {
  return <div>
    {todos.map(function (todo){
return <div key={todo._id}>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    <button onClick={()=>
      
        fetch("localhost:5000/completed",{
       method:"PUT",
       body:JSON.stringify({_id:todo._id}), headers:{
        "Content-type":"application/json"
    }
  }).then(async function (res) {
    const json = res.json();
    alert("Todo updated");
  })
}     
   >{todo.completed?"completed":"mark as completed"}</button>
    </div>
    }
  )
}
</div>
}

export default Todos