const mysql = require("mysql");
require("dotenv").config();
console.log(process.env.PRODUCTION);

const connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(process.env.PRODUCTION);
};    

connection.connect(function(err) { 
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }    
    console.log("connected as id " + connection.threadId);
});    
    
module.exports = connection;    