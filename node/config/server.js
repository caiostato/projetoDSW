const express = require('express')
const consign = require('consign')
const cors = require('cors')

const session = require('express-session');
const dbConnection = require('./dbserver')()
const app = express()
const port = process.env.PORT || 8000 
require('../start/prod')(app)

app.use((req,res,next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
  app.use(cors())
  next()
})

app.listen(port,()=>{
  console.log("servidor rodando na porta: "+port)
})

app.use(session({
  secret: 'secret',
  userId: '',
  loggedin: false,
	resave: true,
	saveUninitialized: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

consign()
.then('./config/dbserver.js')
.into(app)

module.exports = app