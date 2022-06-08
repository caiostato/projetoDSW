const { authLogin, authSignin, getUser } = require('../models/user');
const logger = require('../../config/logger');
const { func } = require('joi');

module.exports.authLogin = function(app,req,res,errors) {

    let connection = app.config.dbserver()

    let data = req.body
    const userRequesting = {
        email: data.email,
        password: data.password
    }
    if(errors.errors.length > 0){
        authLogin(userRequesting, connection, function(error, result){
            const userResponse = {
                id: result[0].user_id,
                nome: result[0].user_name,
                email: result[0].user_email,
                img: result[0].user_img
            }

            if(!error){
                if(result.length > 0){
                    res.json({
                        result: '200',
                        user: userResponse
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