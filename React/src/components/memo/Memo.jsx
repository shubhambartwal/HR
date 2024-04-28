import React,{useState} from 'react'

const Memo = () => {
    const [count ,setCount]=useState(0)
  return (
    <div>
    <h1>hi there</h1>
    <MemoDemo count={count}/>
    <button onClick={()=>setCount((prev=>prev+1))}>CLick me</button>
    </div>
  )
}

export default Memo
const MemoDemo=React.memo(function ({count}){
    console.log('child call')
return (
    <h1>Hi there from Memo demo</h1>
)
})