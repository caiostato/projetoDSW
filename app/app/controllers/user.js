const { authLogin,authSignin } = require('../models/user');
const logger = require('../../config/logger')

module.exports.loadLogin = function(app,req,res) {
    res.render('login.ejs')
}

module.exports.loadSignin = function(app,req,res) {
    res.render('signin.ejs')
}

module.exports.authLogin = function(app,req,res) {

    let connection = app.config.dbserver()

    let data = req.body

    const user = {
        email: data.email,
        password: data.password
    }

    authLogin(user, connection, function(error, result){
        if(!error){
            res.render('signin.ejs')
        }
        else {
            logger.log({
                level: 'error',
                message: error.message
            })

            res.render('error.ejs')
        }
        
    })
}

module.exports.authSignin = function(app,req,res,errors) {

    let connection = app.config.dbserver()

    authSignin(connection, function(error, result){
        if(!error){
            res.render('signin.ejs')
        }
        else {
            logger.log({
                level: 'error',
                message: error.message
            })

            res.render('error.ejs')
        }
        
    })
}