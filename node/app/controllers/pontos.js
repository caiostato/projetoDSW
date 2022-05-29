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

    if(req.session.loggedin){
        
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
                    res.status(200)
                }
                else {
                    logger.log({
                        level: 'error',
                        message: error.message
                    })
                    res.status(400).send(error)
                }})
        }
        else{
            res.status(500).send(errors)
        }
    }
}