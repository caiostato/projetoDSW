module.exports = {
    getHome : function(connection, callback){
        let sql = 'select * from ponto_turistico'
        connection.query(sql,callback)
    }
}