import React,{useState} from 'react'

const App = () => {
    const [count,setCount]=useState(0)
  return (
    <div><Count count={count}/>
    <Buttons setCount={setCount}/>
    </div>
  )
}

export default App

const Count=({count})=>{
return <div>{count}</div>
}
const Buttons=({setCount})=>{
    return <div>
    <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
    <button onClick={()=>setCount(prev=>prev-1)}>Decrease</button>
    </div>

}