import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    function handleCounter(){
        setCount(count=>count+1)
        setCount(count=>count+1)
    }
  return (
   <button onClick={handleCounter}>Couter {count}</button>
  )
}

export default Counter