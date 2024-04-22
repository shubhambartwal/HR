const mongoose= require("mongoose")
const TodoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
},{timestamps:true})
mongoose.connect("mongodb+srv://test:test@cluster0.6gmegp5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true // To avoid deprecation warning
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
});
const Todo=mongoose.model('Todo',TodoSchema); 
module.exports=Todo 