import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {UserContext} from '../App'
const Register=()=>{
  const [user] =useContext(UserContext)
  const [formData, setData]=useState({
    name:'',
    email: '',
    password: ''
  })
  
  
    let history = useHistory();
  useEffect(()=>{
    if (user.name !== null){
      history.push('/')
    }
  })
  
  const {name, email, password}= formData
  const changeHandler=(e)=>{
    setData({...formData, [e.target.name]: e.target.value})
  }
  const submitHandler = async (e)=>{
    e.preventDefault()

    
      try{
          const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({
    name, email, password
  })
  let res = await axios.post('/auth/register', body, config)
  if(res.data.error){
    return alert(res.data.error)
  }
  else{
    alert(res.data.success)
    history.push('/login')
  }
  
      }
      catch(err){
        alert("server error")
      }
    }
  
  return (
    <>
    <form onSubmit={submitHandler}>
  <div className="form-group">
 
    <input type="text" name="name" className="form-control" required placeholder="Enter name" id="name" value={name} onChange={changeHandler}/>
  </div>
    <div className="form-group">
 
    <input type="email" name="email" className="form-control" required  placeholder="Enter email" id="email" value={email} onChange={changeHandler}/>
  </div>
  <div className="form-group">

    <input type="password" name="password" className="form-control" required placeholder="Enter password" id="pwd" value={password} onChange={changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
    </>
    )
}
export default Register