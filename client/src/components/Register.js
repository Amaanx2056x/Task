import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
const Register=({user, setUser})=>{
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
    if(name.length < 3 || password.length <6){
      alert("Name should be 3+ characters and Password should be 6+ characters long")
    }
    else{
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
  alert(res.data.msg)
      }
      catch(err){
        alert("server error")
      }
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