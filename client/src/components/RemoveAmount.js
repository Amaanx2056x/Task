import React,{useState,useContext} from 'react'
import axios from 'axios'
import {UserContext} from '../App'
const RemoveAmount=()=>{
  const [user,setUser] =useContext(UserContext)
  const [formData, setData]=useState({
    removeamount: 0
  })
const {removeamount} = formData
  const changeHandler=(e)=>{
    setData({[e.target.name]: e.target.value})
  }
  
  
    const submitHandler = async (e)=>{
    e.preventDefault()

   
      try{
          const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const email= user.email
  
  const body = JSON.stringify({
    email, removeamount
  })
  
  let res = await axios.put('/transaction/removeAmount', body, config)
  if(res.data.error){
    return alert(res.data.error)
  }
 
  setUser({...user,bal_amount: res.data})
  setData({removeamount: 0})

      }
      catch(err){
        alert("server error")
      }
    }
  
  return (
    <>
    <h3>Remove Amount</h3>
    <form onSubmit={submitHandler}>
 

 
  <div className="form-group">

    <input type="number" name="removeamount" className="form-control" required placeholder="Enter Amount" id="amt" value={removeamount} onChange={changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Withdraw</button>
</form>
<hr/>
    </>
    )
}
export default RemoveAmount