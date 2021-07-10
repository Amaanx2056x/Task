const express = require('express')
const app = express()

const port = process.env.PORT || 2000

//middlewares
app.use(express.json({
  extended: false
}))

//routes
app.use('/auth', require("./routes/auth"))
app.use('/transaction', require("./routes/transaction"))


app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`)
})