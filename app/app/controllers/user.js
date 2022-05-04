const { authLogin,authSignin, checkId } = require('../models/user');
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
            //caminho sem erro
            if(result.length > 0){
                
                checkId(user,connection,function(error,result){
                    let userId = result[0].user_id
                    req.session.userId = `${userId}`;
                })
                app.session.loggedin = true

                res.redirect('/')
            }
            else{
                res.redirect('/error')
            }
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

    let data = req.body
    let user = {
        nome:data.nome,
        password:data.password,
        email:data.email,
        date:data.date,
        address:data.address,
        img:data.img,
    }

    authSignin(user, connection, function(error, result){
        if(!error){
            res.redirect('/')
        }
        else {
            logger.log({
                level: 'error',
                message: error.message
            })

            res.render('error.ejs',error)
        }
        
    })
}