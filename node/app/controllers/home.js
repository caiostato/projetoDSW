const { getHome } = require('../models/home');
const logger = require('../../config/logger')

module.exports.listar = function(app,req,res) {

    let connection = app.config.dbserver()

    getHome(connection, function(error, result){
        if(!error){
            res.status(200).send(result)
        }
        else {
            logger.log({
                level: 'error',
                message: error.message
            })
            res.send(500).send(error)
        }
        
    })
}