module.exports = {
    setPonto : function(ponto,connection, callback){
        let endec = `${ponto.endereco}, ${ponto.bairro} , ${ponto.cidade} - ${ponto.estado}`
        let sql = `inserto into pontos (ponto_nome,ponto_addr,ponto_img,user_idFK) 
        values ("${ponto.nome}","${endec}","${ponto.img}","${ponto.user_id}")`
        connection.query(sql,callback)
    }
}