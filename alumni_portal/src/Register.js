import React from 'react'
import { useRef, useState, useEffect } from "react";


const Register=()=>{
const [name,setName]=useState("");
const [rollNumber,setRollNumber]=useState("");
const [batch,setBatch]=useState("");
const [gender,setGender]=useState("");
const [degree,setDegree]=useState("");
const [branch,setBranch]=useState("");
const [occupation,setOccupation]=useState("");
const handleSubmit=()=>{

  }

return (
    <div className="center">
        <h1>Register</h1>
        <div className="form">
        <div className="txt_field">
        <label>Name </label>
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value);}}/>
        </div>
        <div className="txt_field">
        <label>Enrollment Number </label>
        <input type="text" placeholder="Enter your Enrollment Number" onChange={(e)=>{setRollNumber(e.target.value);}}/>
        </div>
        <label>Year of Enrollment</label>
        <input type="text" placeholder="Enter year of enrollment" onChange={(e)=>{setBatch(e.target.value);}}/>
         <label>
          Gender:
          <select  onChange={(e)=>{setGender(e.target.value);}}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </label>
         <label>
          Degree:
          <select  onChange={(e)=>{setDegree(e.target.value);}}>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="Phd">Phd</option>
          </select>
        </label>
         <label>
          Field of Study:
          <select  onChange={(e)=>{setBranch(e.target.value);}}>
            <option value="CH">Chemical Engineering</option>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="EE">Electrical Engineering</option>
            <option value="ME">Mechanical Engineering</option>
          </select>
        </label>
        <label>Occupation </label>
        <input type="text" placeholder="Enter your occupation" onChange={(e)=>{setOccupation(e.target.value);}}/>
        <button type="submit"  onClick={handleSubmit}>Submit</button>
      </div>
    </div>
)
}

export default Register;