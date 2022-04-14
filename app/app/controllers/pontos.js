const { setPonto } = require('../models/pontos');
const logger = require('../../config/logger')

module.exports.loadPage = function(app,req,res) {
    res.render('pontoCadastrar.ejs')
}

module.exports.savePonto = function(app,req,res) {

    let connection = app.config.dbserver()

    let data = req.body

    let ponto = {
        nome: data.nome,
        cep: data.cep,
        endereco: data.endereco,
        bairro: data.bairro,
        estado: data.estado,
        cidade: data.cidade,
        imagem:data.imagem
    }

    setPonto(ponto,connection, function(error, result){
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