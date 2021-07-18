const express = require('express')
const transaction= require('../controllers/transaction')
const router = express.Router()


router.put("/addAmount",transaction.addAmount)


router.put("/removeAmount", transaction.removeAmount)

module.exports = router