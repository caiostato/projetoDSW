module.exports = {
    setPonto : function(ponto,connection, callback){
        let sql = `inserto into pontos (ponto_nome,ponto_addr,ponto_img,user_idFK) 
        values ("${ponto.nome}","${ponto.addr}","${ponto.img}","${ponto.user_id}")`
        connection.query(sql,callback)
    }
}