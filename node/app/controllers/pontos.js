const { setPonto } = require('../models/pontos');
const logger = require('../../config/logger')

//app.get
// module.exports.loadPage = function(app,req,res) {
//     // ROTA GET CADASTRAR PONTO
//     res.render('ponto/cadastrar.ejs')
// }

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
                    message: 'Erro na conexão com o servidor'
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