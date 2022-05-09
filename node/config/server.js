const express = require('express')
const consign = require('consign')
const session = require('express-session');


let app = express()
let port = process.env.PORT || 8000 

app.listen(port,function(){
    console.log("Aplicação rodando na porta: "+port)
})

app.set('views', './app/views')
app.set('view engine', 'ejs')

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
    .then('config/dbserver.js')
    // .include('./app/routes/routes.js')
    .into(app)

module.exports = app