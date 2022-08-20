const express =require("express")
const app = express();
const bodyParser = require("body-parser");
const dotenv=require("dotenv");
const mongoose =require("mongoose");
const registerRoute =require("./routes/register.js");

const User = require("./models/User"); 

mongoose
    .connect("mongodb+srv://niheeth23:laxminilayam@mastercluster.9eqlou1.mongodb.net/alumni?retryWrites=true&w=majority")
    .then(console.log("connected to mongoDB"))
    .catch((err)=>console.log(err))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/register", registerRoute);


app.listen("5000",()=>{
    console.log("Backend is running");
})
