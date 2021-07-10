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


router.put("/addAmount",async (req,res)=>{
  const {email, addamount} = req.body
   try{
    let user= await knex("Task").where({email: email})
   let new_amt= parseInt(user[0].bal_amount)+ parseInt(addamount)
   await knex("Task").where({email: email}).update({bal_amount: new_amt})
   let updated= await knex("Task").where({email: email})
   res.json(updated[0].bal_amount)
   }
   catch(err){
     console.error(err)
   }
})


router.put("/removeAmount",async (req,res)=>{
    const {email, removeamount} = req.body
   try{
    let user= await knex("Task").where({email: email})
    if (parseInt(user[0].bal_amount) < parseInt(removeamount)){
      return res.json({msg: `Cannow withdraw ${removeamount}, your current balance is ${user[0].bal_amount}`})
    }
   let new_amt= parseInt(user[0].bal_amount)- parseInt(removeamount)
   await knex("Task").where({email: email}).update({bal_amount: new_amt})
   let updated= await knex("Task").where({email: email})
   res.json(updated[0].bal_amount)
   }
   catch(err){
     console.error(err)
   }
})

module.exports = router