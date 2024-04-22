const express= require('express') 
const {createTodo,updateTodo}= require('./types.js')
const Todo =require('./db.js')
const app= express();
app.use(express.json());

//body{ title:String,description:String}
app.post('/todo',async(req,res)=>{
const createPayload=req.body
// const parsedPayload=createTodo.safeParse(createPayload);
// console.log(parsedPayload.success)
// (!parsedPayload.success)
// {
//     res.status(411).json({message:"You send the wrong json"})
// return
// }
//db call
await Todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
})
res.status(200).json({message:"Todo created"})
 
})
app.get('/todos',async (req,res)=>{
const data=await Todo.find({})
res.json({todos:data})
})

app.put("/completed",async(req,res)=>{
    const updatePayload=req.body
    // const parsedPayload=updateTodo.safeParse(updatePayload)
    // if (!parsedPayload.success)
    // {
    //     res.status(411).json({message:"You send the wrong json"})
    //      return
    // }
    await Todo.update({_id:req.body.id},{
        completed:true
    })
    res.json({message:"Todo marked as completed"})
     
})
app.listen(5000,()=>{
    console.log("App is running on port 5000")
})