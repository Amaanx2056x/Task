import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {UserContext} from '../App'

const Login=()=>{
  const [user,setUser] =useContext(UserContext)
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
  if(res.data.error){
    return alert(res.data.error)
  }
  const userTransactions= []
  res.data.user_transactions.forEach(tr=>userTransactions.push(tr.transaction))
  
  
  setUser({name: res.data.user.name, bal_amount: res.data.user.bal_amount, email: res.data.user.email, transactions: userTransactions.reverse()})
      }
   
      catch(err){
        alert("server error")
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