var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (results) {
            callback(results);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (columns, values, callback) {
        orm.insertOne("burgers", columns, values, function (results) {
            callback(results);
        });
    },
    updateOne: function (objectColumnValues, condition, callback) {
        orm.updateOne("burgers", objectColumnValues, condition, function (results) {
            callback(results);
        });
    }
    //     delete: function(condition, callback) {
    //       orm.delete("burgers", condition, function(results) {
    //         callback(results);
    //       });
    // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;