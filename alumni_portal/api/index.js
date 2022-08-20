const express =require("express")
const app = express();
const bodyParser = require("body-parser");
const dotenv=require("dotenv");
const mongoose =require("mongoose");
// const registerRoute =require("./routes/register.js");

const User = require("./models/User"); 

mongoose
    .connect("mongodb://Vibhav:123456@nodetuts.owfvgih.mongodb.net/alumni?retryWrites=true&w=majority",{ // 1
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    })
    .then(console.log("connected to mongoDB"))
    .catch((err)=>console.log(err))

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/register", async(req,res)=>{
    try{

        // const salt=await bcrypt.genSalt(10);
        // const hashedPass=await bcrypt.hash(req.body.password,salt)
        console.log(req.body);
        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            rollnumber:req.body.rollnumber,
            batch:req.body.batch,
            gender:req.body.gender,
            degree:req.body.degree,
            branch:req.body.branch,
            occupation:req.body.occupation,
            password:req.body.password
        });
        console.log(newUser.name);
        newUser.save();
        console.log("errorrrrrr");
        res.status(200).json(newUser);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }});

// app.use("/register", registerRoute);


app.listen("3080",()=>{
    console.log("Backend is running");
})
