import React, { useState } from "react";
import Header from "./Header";
const Toplevel = () => {
    const [title,setTitle]=useState("Shubham")
    const handleChange=()=>{
        console.log('handleChange Working')
        setTitle(Math.random()) 
    }
  return (
    <div>
    <button onClick={handleChange}>Click me to change header</button>
      <Header  title={title}/>
      <Header  title={"header2"}/>
      <Header  title={"header2"}/>
      <Header  title={"header2"}/>
      <Header  title={"header2"}/>
      <Header  title={"header2"}/>
      <Header  title={"header2"}/>
      
    </div>
  );
};

export default Toplevel;
