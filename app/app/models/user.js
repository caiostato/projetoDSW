module.exports = {
    authLogin : function(user,connection, callback){
        let sql = `select count() from user where user_email="${user.email}" and user_password="${user.password}"`
        connection.query(sql,callback)
    },
    authSignin : function(user,connection, callback){
        let sql = `INSERT INTO user (user_name,user_password,user_email,user_date,user_addr,user_img)
            values ("${user.nome}","${user.password}","${user.email}","${user.date}","${user.addr}","${user.img}")`
        connection.query(sql,callback)
    }

}
