module.exports = {
    
    //ROTA CARREGAR MAIN PAGE
    home: function(app){

        let controller = require('../controllers/home')

        app.get('/', (req,res)=>{
        controller.listar(app,req,res)
        })

    },
    error: function(app){

        let controller = require('../controllers/error')

        app.get('/error', (req,res)=>{
        controller.loadPage(app,req,res)
        })

    },
    pontos: function(app){

        let controller = require('../controllers/pontos')
        const { check, validationResult} = require('express-validator')

        //ROTA CARREGAR CADASTRAR PONTO PAGE
        app.get('/pontos/cadastrar', (req,res)=>{
        controller.loadPage(app,req,res)
        }),
        
        //ROTA ENVIAR DADOS SOBRE CADASTRO DO PONTO
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

        //ROTA LOGIN USER
        app.get('/user/login', (req,res)=>{
        controller.loadLogin(app,req,res)
        }),

        //ROTA SIGN IN USER
        app.get('/user/signin', (req,res)=>{
            controller.loadSignin(app,req,res)
        }),
        
        //ROTA AUTH LOGIN
        app.post('/user/login/auth', (req,res)=>{
            controller.authLogin(app,req,res)
        }),

        //ROTA AUTH SIGN IN
        app.post('/user/signin/auth',[
            check('nome', 'Nome muito curto').isLength({min:5}),
            check('email', 'E-mail invalido').isEmail(),
            check('password', 'Senha muito curta').isLength({ min:2 }),
            check('passwordConfirmation','Confirmação de Senha muito curta').isLength({ min:2 }),
            check('date').isDate(),
            check('address', 'Endereço muito curto').isLength({ min:8 }),
            check('img','Não é URL').isURL(),
            
        ], (req,res)=>{
            const errors = validationResult(req)
            controller.authSignin(app,req,res,errors)
        })

    },
}


