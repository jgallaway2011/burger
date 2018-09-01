// Dependencies
var mysql = require("mysql");

// Sets up MySQL connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 330,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Connects to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports connection to use in orm.js
module.exports = connection;