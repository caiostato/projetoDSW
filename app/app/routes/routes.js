module.exports = {
    home: function(app){

        let controller = require('../controllers/home')

        app.get('/', (req,res)=>{
        controller.listar(app,req,res)
        })

    },
    pontos: function(app){

        let controller = require('../controllers/pontos')
        const { check, validationResult} = require('express-validator')

        app.get('/pontos/cadastrar', (req,res)=>{
        controller.loadPage(app,req,res)
        }),
        
        app.post('/pontos/cadastrar/save',[
            //checks
        ], (req,res)=>{
            const errors = validationResult(req)
            controller.savePonto(app,req,res,errors)
        })

    },
    user: function(app){

        let controller = require('../controllers/user')
        const { check, validationResult} = require('express-validator')

        app.get('/user/login', (req,res)=>{
        controller.loadLogin(app,req,res)
        }),

        app.get('/user/signin', (req,res)=>{
            controller.loadSignin(app,req,res)
        }),
        
        //AUTH
        app.post('/user/login/auth', (req,res)=>{
            controller.authLogin(app,req,res)
        }),

        app.post('/user/signin/auth',[
            check('email').isEmail(),
            check('password').isLength({ min:8 })
        ], (req,res)=>{
            const errors = validationResult(req)
            controller.authSignin(app,req,res,errors)
        })

    },
}


