const express = require('express')
const bcrypt = require('bcryptjs')
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'Task'
  }
});
const router = express.Router()

router.post("/register",async (req,res)=>{
  const {name, email, password} =req.body
  try{
    let user= await knex("Task").where({email: email})
    if(user[0]){
      return res.json({msg:"User with that email already exists"})
    }
    const salt = await bcrypt.genSalt(10)
    let hashed = await bcrypt.hash(password, salt)
    await knex("Task").insert({name,email,password: hashed})
    return res.json({msg: "User added"})
  }
  catch(e){
    console.error(e)
  }
})

router.post("/login", async (req,res)=>{
  const {email, password} =req.body
  try{
    let user= await knex("Task").where({email: email})
    if(!user[0]){
      return res.json({msg:"No User found with that email"})
    }
    const isMatch = await bcrypt.compare(password, user[0].password)
  if (!isMatch){
    return res.json({msg:"Incorrect Password"})
  }
  res.json(user[0])

 
  }
  catch(e){
    console.error(e)
  }
})

module.exports = router