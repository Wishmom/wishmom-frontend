import React, { useState } from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';

const Register = () => {
    const navigate = useNavigate();
    const {btnLoading, registerUser}= UserData();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [name,setName]= useState("");

    const submitHandler = async(e)=>{
        e.preventDefault()
        await registerUser(name,email,password,navigate);
    };
  return(
    <div className='auth-page'>
        <div className='auth-form'>
            <h2>Register</h2>
            <form  onSubmit={submitHandler}>
            <label htmlFor="name">Name
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
                </label>

                <label htmlFor="email">Email
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </label>

                <label htmlFor="password">Password
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </label>

                <button type="submit" disabled={btnLoading} className='common-btn'> { btnLoading? "Please Wait.....":"Register"}</button>
            </form>
            <p>
                Have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    </div>
  ) 
};

export default Register;