const { setPonto,updatePonto,delPonto } = require('../models/pontos')
const logger = require('../../config/logger')

module.exports.savePonto = function(app,req,res,errors) {
    //ROTA POST PONTO
    let connection = app.config.dbserver()

    let data = req.body
        
    let ponto = {
        nome: data.nome,
        cep: data.cep,
        endereco: data.endereco,
        bairro: data.bairro,
        estado: data.estado,
        cidade: data.cidade,
        imagem:data.imagem,
        user_id:req.session.userId
    }

    //FUNCAO DO MODEL QUE ENVIA PARA O MYSQL
    if(errors.errors.length > 0){
        setPonto(ponto,connection, function(error, result){
            if(!error){
                res.json({
                    result: '200'
                })
            }
            else {
                logger.log({
                    level: 'error',
                    message: error.message
                })
                res.json({
                    result: '500',
                    message: error.message,
                
                })
            }})
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

module.exports.putPonto = function(app,req,res,errors){

    let connection = app.config.dbserver()

    let data = req.body
        
    let ponto = {
        id: data.id,
        nome: data.nome,
        addr: data.endereco,
        imagem:data.imagem,
    }
    
    if(errors.errors.length > 0){
        updatePonto(ponto,connection, function(error, result){
            if(!error){
                res.json({
                    result: '200'
                })
            }
            else {
                logger.log({
                    level: 'error',
                    message: error.message
                })
                res.json({
                    result: '500',
                    message: error.message
                })
            }})
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
module.exports.deletePontos = function(app,req,res,errors){

    let connection = app.config.dbserver()

    let data = req.body
        
    let id = data.id
    
    if(errors.errors.length > 0){
        delPonto(id,connection, function(error, result){
            if(!error){
                res.json({
                    result: '200'
                })
            }
            else {
                logger.log({
                    level: 'error',
                    message: error.message
                })
                res.json({
                    result: '500',
                    message: error.message
                })
            }})
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