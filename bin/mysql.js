const mysql = require("mysql2/promise");
module.exports.pool = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "users",
        waitForConnectios: true,
        connectionLimit: 10,
        queueLimit:0
    }
)