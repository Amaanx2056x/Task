import React,{useState} from 'react'
import axios from 'axios'
const AddAmount=({user, setUser})=>{
  const [formData, setData]=useState({
    addamount: 0
  })
const {addamount} = formData
  const changeHandler=(e)=>{
    setData({[e.target.name]: e.target.value})
  }
  
  
    const submitHandler = async (e)=>{
    e.preventDefault()
    if(addamount<=0){
      alert("Negative values are not allowed")
    }
    else{
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
  if(res.data.msg){
    alert(res.data.msg)
  }
  console.log(res.data)
  setUser({...user,bal_amount: res.data})
  setData({addamount: 0})

      }
      catch(err){
        alert("server error")
      }
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