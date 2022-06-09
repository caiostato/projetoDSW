module.exports = {
  setPonto : function(ponto,connection, callback){
    let addr = `${ponto.endereco}, ${ponto.bairro} , ${ponto.cidade} - ${ponto.estado}`
    let sql = `INSERT INTO pontos (ponto_nome,ponto_addr,ponto_img,user_idFK) 
    VALUES ("${ponto.nome}","${addr}","${ponto.img}","${ponto.user_id}")`
    connection.query(sql,callback)
  },
  updatePonto: function(ponto, connection, callback){
    let sql = `UPDATE pontos 
    SET ponto_nome=${ponto.nome},
    ponto_addr=${ponto.addr},
    ponto_img=${ponto.img}
    WHERE ponto_id=${ponto.id}`
    connection.query(sql,callback)
  },
  delPonto: function(id, connection, callback){
    let sql = `DELETE FROM ponto WHERE ponto_id=${id}`
    connection.query(sql,callback)
  },
}