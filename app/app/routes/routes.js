module.exports = {
    home: function(app){
        let controller = require('../controllers/home')
        app.get('/', (req,res)=>{
        controller.listar(app,req,res)
        })
    },
    login: function(app){
        let controller = require('../controllers/login')
        app.get('/login', (req,res)=>{
        controller.listar(app,req,res)
        })
    },
}


