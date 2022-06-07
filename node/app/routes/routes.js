module.exports = {
    
    //ROTA CARREGAR MAIN PAGE
    home: function(app){

        let controller = require('../controllers/home')

        app.get('/api/pontos', (req,res)=>{
        controller.listar(app,req,res)
        })
    },
    pontos: function(app){

        let controller = require('../controllers/pontos')
        const { check, validationResult} = require('express-validator')

        //ROTA CARREGAR CADASTRAR PONTO PAGE
        // app.get('/pontos/cadastrar', (req,res)=>{
        // controller.loadPage(app,req,res)
        // }),
        //ROTA ENVIAR DADOS SOBRE CADASTRO DO PONTO
        app.post('/pontos/cadastrar/save',[
            check('nome', 'Nome muito curto').isLength({min:5}),
            check('cep', 'CEP com tamanho invalido').isLength({min:9,max:9}),
            check('address', 'Endereço muito curto').isLength({ min:8 }),
            check('bairro', 'Bairro muito curto').isLength({ min:5 }),
            check('cidade', 'Cidade muito curto').isLength({ min:5}),
            check('estado', 'Estado muito curto').isLength({ min:2,max:2}),
            check('img','Não é URL').isURL(),
        ], (req,res)=>{
            const errors = validationResult(req)
            controller.savePonto(app,req,res,errors)
        })
    },
    user: function(app){

        let controller = require('../controllers/user')
        const { check, validationResult} = require('express-validator')

        //ROTA AUTH LOGIN
        app.post('/user/login', (req,res)=>{
            controller.authLogin(app,req,res)
        }),
        //ROTA AUTH SIGN IN
        app.post('/user/signin',[
            check('nome', 'Nome muito curto').isLength({min:5}),
            check('email', 'E-mail invalido'),
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