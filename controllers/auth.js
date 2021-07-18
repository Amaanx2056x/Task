const bcrypt = require('bcryptjs')
const knex = require('../config/db-config')


const register=async (req,res)=>{
  const {name, email, password} =req.body
     if(name.length < 3 || password.length <6){
      return res.json({error: 'Name should be 3+ characters and Password should be 6+ characters long'})
    }
  try{
    let user= await knex("Task").where({email: email})
    if(user[0]){
      return res.json({error:"User with that email already exists"})
    }
    const salt = await bcrypt.genSalt(10)
    let hashed = await bcrypt.hash(password, salt)
    await knex("Task").insert({name,email,password: hashed})
    return res.json({success: "User added"})
  }
  catch(e){
    console.error(e)
    return res.json({error: 'Server error'})
    
  }
}

const login=async (req,res)=>{
  const {email, password} =req.body
 if(password.length <6){
     return res.json({error: "Password should be 6+ characters long"})
    }
  try{
    let user= await knex("Task").where({email: email})
    if(!user[0]){
      return res.json({error:"No User found with that email"})
    }
    const isMatch = await bcrypt.compare(password, user[0].password)
  if (!isMatch){
    return res.json({error:"Incorrect Password"})
  }
  return res.json(user[0])

 
  }
  catch(e){
    console.error(e)
    return res.json({error: 'Server error'})
    
  }
}

module.exports ={register,login}