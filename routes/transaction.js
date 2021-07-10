const express = require('express')
const auth = require('../middleware/checkAuth')
const jwt = require('jsonwebtoken')
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
  
})


router.put("/removeAmount",async (req,res)=>{
  
})

module.exports = router