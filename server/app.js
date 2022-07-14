const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')


app.use(cors())
require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
  console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
  console.log("error in connection ", err)
})

app.get('/',(req,res)=>{
  res.send("hello")
})

app.listen(PORT,()=>{
  console.log("server is running on",PORT)
})
