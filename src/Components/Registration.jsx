import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import {useState} from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Register_Request } from "../Redux/register/action"
import "./Signup.css";

export const Register = () => {
    const dispatch=useDispatch();
    const navigate =useNavigate()
    const [user,setUser] = useState({
        username:"",
        phone: "",
        email:"",
        password:"",
        role: ""
    })

    const handleChange =(e)=>{
        // e.preventDefault()
        const{name,value} = e.target;
        
       
        setUser({...user,[name]:value,})
    }
    const registration  = ()=>{
        const {username,phone,email,password, role} = user

        console.log("User: ", user)
        
        if(username && phone && role && email  && password ){
           console.log("Success")
          dispatch(Register_Request(user,navigate))
            
        }
           

        else{
            alert ("Please fill all the spaces")
        }
       
    }

    return (
        <div id="main">
            <div id="img">
                <h3>Registration</h3>
                    <input type="text" name="username" value={user.username} placeholder="enter your first name" onChange={handleChange} className = "input" />
                    <br />
                    <br />
                    <input type="email" name="email" value={user.email} placeholder="enter your email" onChange={handleChange} className = "input" />
                    <br />
                    <br />
                    <input type="number" name="phone" value={user.phone} placeholder="enter your number" onChange={handleChange} className = "input" />
                    <br />
                    <br />
                    <input type="password" name="password" value={user.password} placeholder="enter your password" onChange={handleChange} className = "input" />
                    <br />
                    <br />
                    <select name="role" value={user.role} onChange={handleChange} className = "input">
                        <option value="">Select</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="staff">Staff</option>
                    </select>
                    <br />
                    <br />
                    <button type="submit" onClick={registration} className = "input">Submit</button>
                    <br />
                    <p>Already you have an account, you can <Link to={"/login"}>Login</Link></p>
            </div>
        </div>
    )
}