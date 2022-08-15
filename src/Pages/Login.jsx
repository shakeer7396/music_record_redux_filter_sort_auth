import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {login} from '../Redux/AuthReducer/action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actionType';
import {useNavigate,useLocation} from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");
  const location =useLocation();
  const comingFrom = location.state?.from?.pathname || '/';

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
        if(r.type === USER_LOGIN_SUCCESS){
          navigate(comingFrom,{replace:true})
        }
      })
    }
    
  }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>User Name</label>
        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <label>Email</label>
        <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login