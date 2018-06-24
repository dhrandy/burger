//Setup the code to connect Node to MySQL
require("dotenv").config()
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
});

//Make connection

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//=======================================================================================
//comment out to run locally everything between these = signs
//=======================================================================================

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    });
};

// Export connection for our ORM to use
 connection.connect();  // comment out to run locally
//=======================================================================================
//=======================================================================================
module.exports = connection;