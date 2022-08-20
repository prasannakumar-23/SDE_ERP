const express=require('express');
const app=express();
const router=require("express").Router();
const User = require("./../models/User.js");
// const bcrypt = require('bcrypt');

router.get("/", (req, res)=>{
    console.log("open");
    
})

router.post("/",async(req,res)=>{
    try{

        // const salt=await bcrypt.genSalt(10);
        // const hashedPass=await bcrypt.hash(req.body.password,salt)
        console.log(req.body);
        const newUser=new User({
            // name:req.body.name,
            // email:req.body.email,
            // rollnumber:req.body.rollnumber,
            // batch:req.body.batch,
            // gender:req.body.gender,
            // degree:req.body.degree,
            // branch:req.body.branch,
            // occupation:req.body.occupation,
            // password:req.body.password
            req.body
        });
        console.log(newUser.name);
        newUser.save();
        console.log("errorrrrrr");
        res.status(200).json(newUser);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports=router
