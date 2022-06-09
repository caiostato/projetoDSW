module.exports = {
  getHome : function(connection, callback){
      let sql = 'SELECT * FROM ponto_turistico'
      connection.query(sql,callback)
  }
}