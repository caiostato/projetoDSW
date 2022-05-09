let mysql = require('mysql');


let connMySQL = function() {
    console.log("Conexão com o banco de dados iniciada")
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'ponto_turistico'
    });
}

module.exports = function () {
    return connMySQL
}       