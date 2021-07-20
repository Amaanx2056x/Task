import React,{useState,useContext} from 'react'
import axios from 'axios'
import {UserContext} from '../App'
const AddAmount=()=>{
  const [user,setUser] =useContext(UserContext)
  const [formData, setData]=useState({
    addamount: 0
  })
const {addamount} = formData
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
    email, addamount
  })
  
  let res = await axios.put('/transaction/addAmount', body, config)
  if(res.data.error){
    return alert(res.data.error)
  }
  const userTransactions= []
  res.data.user_transactions.forEach(tr=>userTransactions.push(tr.transaction))
  setUser({...user,bal_amount: res.data.updated, transactions: userTransactions.reverse()})
  setData({addamount: 0})

      }
      catch(err){
        alert("server error")
      }
    }
  
  return (
    <>
    <h3>Add Amount</h3>
    <form onSubmit={submitHandler}>
 

 
  <div className="form-group">

    <input type="number" name="addamount" className="form-control" required placeholder="Enter Amount" id="amt" value={addamount} onChange={changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Deposit</button>
</form>
<hr/>
    </>
    )
}
export default AddAmount