import { useRef, useState, useEffect } from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from './Login/index';
import Register from './Register/index';
function App() {
  const [gender,setGender]=useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
