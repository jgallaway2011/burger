// Imports connection.js
var connection = require("../config/connection.js");

// Custom ORM
var orm = {
    // Selects all data from specified table when called with parameters
    selectAll: function(table, callback) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(error, result) {
        if (error) {
          throw errpr;
        }
        callback(result);
      });
    },
    // Creates a new table row of data when called with parameters
    insertOne: function(table, columns, values, callback) {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += columns.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(values.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, values, function(error, result) {
        if (error) {
          throw error;
        }
        callback(result);
      });
    },
    // Updates specified fields when called with parameters
    updateOne: function(table, objectColumnValues, condition, callback) {
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objectToSql(objectColumnValues);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(error, result) {
        if (error) {
          throw error;
        }
  
        callback(result);
      });
    }
  };

  // Helper function for quetion marks
  function printQuestionMarks(number) {
    var array = [];
  
    for (var i = 0; i < number; i++) {
      array.push("?");
    }
    return array.toString();
  }
  
  // Helper function for MySQL syntax
  function objectToSql(object) {
    var array = [];
  
    for (var key in object) {
      var value = object[key];
      if (Object.hasOwnProperty.call(object, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        array.push(key + "=" + value);
      }
    }
    return array.toString();
  }  
  
  // Export the orm object for the model (burger.js)
  module.exports = orm;