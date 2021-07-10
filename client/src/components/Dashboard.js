import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";

import AddAmount from './AddAmount'
import RemoveAmount from './RemoveAmount'

const Dashboard=({user,setUser})=>{
  let history = useHistory();
  useEffect(()=>{
    if (user.name === null){
      history.push('/login')
    }
  })
  return (
    <>
    <h3> Welcome {user.name} </h3>
    <h3> Your Balance:{user.bal_amount} </h3>
    <AddAmount />
    <RemoveAmount/>
    </>
    
    )
}
export default Dashboard