const mysql = require("mysql");
// require("dotenv").config();
// console.log(process.env.PRODUCTION); 

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // connection = mysql.createConnection(process.env.PRODUCTION);
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        PORT: 3306,
        database: "burgers_db"
    });
};    

connection.connect(function(err) { 
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }    
    console.log("connected as id " + connection.threadId);
});    
    
module.exports = connection;    