const bcrypt = require('bcryptjs')
const knex = require('../config/db-config')

const addAmount =async (req,res)=>{
  const {email, addamount} = req.body
  if(addamount<=0){
      return res.json({error:"Negative values are not allowed"})
    }
   try{
    let [user]= await knex("Task").where({email: email})
    
   let new_amt= parseInt(user.bal_amount)+ parseInt(addamount)
   
   await knex("Task").where({email: email}).update({bal_amount: new_amt})
   let [updated]= await knex("Task").where({email: email})
   
   return res.json(updated.bal_amount)
   }
   catch(err){
     console.error(err)
     return res.json({error: 'Server error'})
   }
}

const removeAmount=async (req,res)=>{
    const {email, removeamount} = req.body
    if(removeamount<=0){
      return res.json({error: "Negative values are not allowed"})
    }
   try{
    let [user]= await knex("Task").where({email: email})
    if (parseInt(user.bal_amount) < parseInt(removeamount)){
      return res.json({error: `Cannow withdraw ${removeamount}, your current balance is ${user.bal_amount}`})
    }
   let new_amt= parseInt(user.bal_amount)- parseInt(removeamount)
   await knex("Task").where({email: email}).update({bal_amount: new_amt})
   let [updated]= await knex("Task").where({email: email})
   return res.json(updated.bal_amount)
   }
   catch(err){
     console.error(err)
     return res.json({error: 'Server error'})
   }
}

module.exports ={
  addAmount,removeAmount
}