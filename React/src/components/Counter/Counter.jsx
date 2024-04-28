import React, { useRef ,useState} from "react";

const Counter = () => {
    const [sol,setSol]=useState(0)
  const refNo = useRef(0);
  function handleCounter() {
   const no=refNo.current.value
   setSol((parseInt(no)*(parseInt(no)+1)/2))

  }
  return (
    <div>
      <input type="text" ref={refNo} />
      <button onClick={handleCounter}>Couter</button>
      <h1>{sol}</h1>
    </div>
  );
};

export default Counter;
