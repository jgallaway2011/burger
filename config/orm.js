var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callback) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(error, result) {
        if (error) {
          throw errpr;
        }
        callback(result);
      });
    },
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

  function printQuestionMarks(number) {
    var arr = [];
  
    for (var i = 0; i < number; i++) {
      array.push("?");
    }
    return array.toString();
  }
  
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
  }  
  
  // Export the orm object for the model (burger.js)
  module.exports = orm;