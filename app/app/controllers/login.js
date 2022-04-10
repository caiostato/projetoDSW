const { getLogin } = require('../models/login');
const logger = require('../../config/logger')

module.exports.listar = function(app,req,res) {

    let connection = app.config.dbserver()

    getHome(connection, function(error, result){
        if(!error){
            res.render('login.ejs')
        }
        else {
            logger.log({
                level: 'error',
                message: error.message
            })
            
            // let pagina = "<h1>Erro encontrado</h1><h2>"+error+"</h2>";
            // res.status(500).send(pagina);

            res.render('error.ejs')
        }
        
    })
}