const { authLogin, authSignin } = require('../models/user');
const logger = require('../../config/logger')

module.exports.authLogin = function(app,req,res,errors) {

    let connection = app.config.dbserver()

    let data = req.body
    const user = {
        email: data.email,
        password: data.password
    }
    if(!errors){
        authLogin(user, connection, function(error, result){
            console.log(user)
            if(!error){
                console.log(result)
                if(result.length > 0){
                    res.json({
                        result: '200',
                        id:result[0].user_id
                    })
                }
            }
            else {
                logger.log({
                    level: 'error',
                    message: error.message
                })
                res.json({
                    result: '500',
                    message: 'Erro na conexão com o servidor'
                })
            }
            })
    } else {
        // logger.log({
        //     level: 'error',
        //     message: errors
        // })
        // res.json({
        //     result: '400',
        //     message: errors
        // })
    }
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
                console.log(result)
                res.json({
                    result: '200',
                })
            }
            else {
                logger.log({
                    level: 'error',
                    message: error.message
                })
                res.json({
                    result: '500',
                    message: 'Erro na conexão com o servidor'
                })
            }
        })
    }
    else{
        logger.log({
            level: 'error',
            message: errors.errors
        })
        res.json({
            result: '400',
            message: errors.errors
        })
    }
}