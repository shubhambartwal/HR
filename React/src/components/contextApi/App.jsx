import React, { useContext, useState } from "react";
import { countContext } from "./Context";

const App = () => {
  const [count, setCount] = useState(0);
  //wrap anyone  that want to use the   value in the provider
   return (
    <div>
    <countContext.Provider value={{count,setCount}}>
      <Counter setCount={setCount} />
      </countContext.Provider>
      </div>
  );
};

export default App;
const Counter = () => {
  
  return <div>
    <CounteRender />
    <Buttons  />
  </div>;
};
const CounteRender = () => {
    const {count}=useContext(countContext)
  return <h1>{count}</h1>;
};
const Buttons = () => {
   const {setCount}=useContext(countContext)
  return (
    <div>
      <button onClick={(prev) => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button onClick={(prev) => setCount((prev) => prev - 1)}>
        Decrement
      </button>
    </div> 
  );
};
