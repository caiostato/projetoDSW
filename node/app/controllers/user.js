const { authLogin, authSignin, checkId } = require('../models/user');
const logger = require('../../config/logger')

module.exports.checkAuth = function(app,req,res) {
    const userAuth = {
        session: req.session.loggedin,
        userId:req.session.userId
    }

    res.status(200).send(userAuth)
}

// module.exports.loadSignin = function(app,req,res) {
//     res.render('user/signin.ejs')
// }

module.exports.authLogin = function(app,req,res,errors) {

    let connection = app.config.dbserver()

    let data = req.body

    const user = {
        email: data.email,
        password: data.password
    }
    authLogin(user, connection, function(error, result){
        if(!error){
            //caminho sem erro
            if(result.length > 0){
                checkId(user,connection,function(error,result){
                    let userId = result[0].user_id
                    req.session.userId = userId
                })
                
                req.session.loggedin = true

                let session = req.session

                res.status(200).send(session) //arrumar codigo 200
            }
            else{
                res.status(500).send(errors)
            }
        }
        else {
            logger.log({
                level: 'error',
                message: error.message
            })

            res.status(400).send(error)
        }
        
    })
}

module.exports.authSignin = function(app,req,res,errors) {

    let connection = app.config.dbserver()

    let data = req.body
    let user = {
        nome:data.nome,
        password:data.password,
        email:data.email,
        date:data.date,
        address:data.address,
        img:data.img,
    }

    if(errors.errors.length > 0){
        authSignin(user, connection, function(error, result){
            if(!error){
                res.status(200).send('O cadastro foi realizado com sucesso!')
            }
            else {
                logger.log({
                    level: 'error',
                    message: error.message
                })
                res.status(400).send(error)
            }
        })
    }
    else{
        res.status(500).send(errors)
    }
}