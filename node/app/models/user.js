module.exports = {
    authLogin : function(user,connection, callback){
        let sql = `SELECT user_id,user_name,user_email,user_img from user WHERE user_email="${user.email}" and user_password="${user.password}";`
        connection.query(sql,callback)
    },
    authSignin : function(user,connection, callback){
        let sql = `INSERT INTO user (user_name,user_password,user_email,user_date,user_addr,user_img) VALUES ("${user.nome}","${user.password}","${user.email}","${user.date}","${user.address}","${user.img}")`
        connection.query(sql,callback)
    },
}
