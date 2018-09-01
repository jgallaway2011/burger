// Imports orm.js
var orm = require("../config/orm.js");

var burger = {
    // Function to pull all data from MySQL for the table burgers
    selectAll: function (callback) {
        orm.selectAll("burgers", function (results) {
            callback(results);
        });
    },
    // Function to create a new table row in MySQL for burgers
    insertOne: function (columns, values, callback) {
        orm.insertOne("burgers", columns, values, function (results) {
            callback(results);
        });
    },
    // Function to update field for a particular data row in the burgers table
    updateOne: function (objectColumnValues, condition, callback) {
        orm.updateOne("burgers", objectColumnValues, condition, function (results) {
            callback(results);
        });
    }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;