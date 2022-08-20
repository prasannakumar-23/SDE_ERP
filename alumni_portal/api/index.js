const express =require("express")
const app = express();
const dotenv=require("dotenv");
const mongoose =require("mongoose");
const registerRoute =require("./routes/register.js");
mongoose
    .connect("mongodb+srv://niheeth23:laxminilayam@nodetuts.owfvgih.mongodb.net/alumni?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    })
    .then(console.log("connected to mongoDB"))
    .catch((err)=>console.log(err))

app.use("/register",registerRoute);


app.listen("3000",()=>{
    console.log("Backend is running");
})
