import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { Login_Request } from "../Redux/login/action";


export const Login = () => {
    const dispatch=useDispatch()
    const data = useSelector((store)=>store.login.data)
    console.log("login",data)
    
   const  navigate =useNavigate()
   const [user,setUser] = useState({
      
       email:"",
       password:""
   })

   const handleChange =e=>{
       const{name,value} =e.target

       setUser({
           ...user,
           [name]:value,     
       })
   }



   const login  =() =>{
       dispatch(Login_Request(user,navigate))
       console.log(user, "user")
   }
    

    // login ?  <Navigate to = {`/products`}></Navigate> :
    return (
        <div id="main">
            <div id="img">
                <h3>Login Account</h3>
                <br />
                <input className="mail" type="text" name="email" value={user.email} placeholder="Enter Your E-mail id" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                <br />
                <br />
                <input className="mail" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} style={{height:"30px",width:"80%"}} />
                <br />
                <br />
                <button className="l2" style={{height:"30px",width:"80%"}}
                onClick=
                {login}
                >Log in</button>
                <br />
                <p>If your new user then click here <Link style={{textDecoration:"none", color:"blue"}} to="/register">Register</Link></p>
            </div>
        </div>
    )
}