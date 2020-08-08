const connection = require("./connection");

let orm = {

    selectAll: function(tableInput) {
        connection.query("SELECT * FROM ??", [tableInput], function(err, result) {;
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    
    insertOne: function() {
        connection.query("INSERT INTO tableInput (columnTwo, columnThree) VALUES (?, false)", function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },

    updateOne: function() {
        connection.query("UPDATE burgers SET burger_name = ?? WHERE id = ?", [req.params.id], function (err, result) {
            if (err) throw err;
                console.log(result);
                callback(result);
        });        
    }

}

module.exports = orm;