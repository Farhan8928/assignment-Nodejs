const mysql= require("mysql2/promise")

const pool = mysql.createPool({
    host:"nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
    user:"candidate",
    password:"NoTeDeSt^C10.6?SxwY882}",
    database:"test",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

module.exports=pool;