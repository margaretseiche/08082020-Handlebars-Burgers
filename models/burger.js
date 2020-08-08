let orm = require("../config/orm");

let burger = {
    // Find all the burgers on the current menu.
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        })
    },

    // Allow user to create a new burger.
    create: function(cols, vals, callback) {
        orm.insertOne("burgers",cols, vals, function(res) {
            callback(res);
        });
    },    
    
    // Update a burger.
    update: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }    

}    

module.exports = burger; 