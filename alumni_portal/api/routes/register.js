const express=require('express');
const app=express();
const router=require("express").Router();
const User = require("./../models/User");

router.post("/register",async(req,res)=>{
    try{

        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password,salt)
        const newUser=new User({
            name:req.body.username,
            email:req.body.email,
            rollnumber:req.body.rollnumber,
            batch:req.body.batch,
            gender:req.body.gender,
            degree:req.body.degree,
            branch:req.body.branch,
            password:hashedPass,
        });
        const user =await newUser.save();
        console.log("errorrrrrr");
        res.status(200).json(user);
    }catch(err){
        console.log("errorrrrr");
        res.status(500).json(err);
    }
});

module.exports=router
