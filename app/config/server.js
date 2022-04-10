const express = require('express')
const consign = require('consign')

let app = express()
let port = process.env.PORT || 8000 

app.listen(port,function(){
    console.log("servidor rodando na porta: "+port)
})

app.set('views', './app/views')
app.set('view engine', 'ejs')

consign()
    .then('config/dbserver.js')
    // .include('./app/routes/routes.js')
    .into(app)

module.exports = app