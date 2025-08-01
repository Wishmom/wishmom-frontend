import React, {useState} from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';
import {UserData} from "../../context/UserContext";

const Login = () => {
    const navigate = useNavigate();
    const {btnLoading, loginUser}= UserData();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");


    const submitHandler = async(e)=>{
        e.preventDefault()
        await loginUser(email,password,navigate);
    };
  return(
    <div className='auth-page'>
        <div className='auth-form'>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </label>

                <label htmlFor="password">Password
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
                </label>

                <button disabled={btnLoading} type='submit' className='common-btn'>{btnLoading ? "Please wait..." : "Login"}</button>
            </form>
            <p>
                Don't have an account? <Link to='/register'>Register</Link>
            </p>
            <p><Link to="/forgot">Forgot password?</Link></p>
        </div>
    </div>
  ) 
};

export default Login;