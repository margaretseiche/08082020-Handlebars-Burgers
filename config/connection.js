const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) { 
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }    
    console.log("connected as id " + connection.threadId);
});    
    
module.exports = connection;    