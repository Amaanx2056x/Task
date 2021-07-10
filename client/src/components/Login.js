import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
const Login=({user,setUser})=>{
  const [formData, setData]=useState({
    email: '',
    password: ''
  })
  
    let history = useHistory();
  useEffect(()=>{
    if (user.name !== null){
      history.push('/')
    }
  })
  
  
  const {email, password}= formData
  const changeHandler=(e)=>{
    setData({...formData, [e.target.name]: e.target.value})
  }
  
 
  const submitHandler = async (e)=>{
    e.preventDefault()
    if(password.length <6){
      alert("Password should be 6+ characters long")
    }
    else{
      try{
          const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({
    email, password
  })
  let res = await axios.post('/auth/login', body, config)
  if(res.data.msg){
    alert(res.data.msg)
  }
  setUser({name: res.data.name, bal_amount: res.data.bal_amount, email: res.data.email})


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
 
    <input type="email" name="email" className="form-control" required  placeholder="Enter email" id="email" value={email} onChange={changeHandler}/>
  </div>
  <div className="form-group">

    <input type="password" name="password" className="form-control" required placeholder="Enter password" id="pwd" value={password} onChange={changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </>
    )
}
export default Login