var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
      orm.all("burgers", function(results) {
        callback(results);
      });
    },
    // The variables cols and vals are arrays.
    create: function(columns, values, callback) {
      orm.create("burgers", columns, values, function(results) {
        callback(results);
      });
    },
    update: function(objColVals, condition, callback) {
      orm.update("burgers", objColVals, condition, function(results) {
        callback(results);
      });
    },
    delete: function(condition, callback) {
      orm.delete("burgers", condition, function(results) {
        callback(results);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;