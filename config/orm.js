// create the methods that will execute the necessary MySQL commands in the controller. These are the methods you will need to use in order to retrieve and store data in your database.
// - selectAll()
// - insertOne()
// - updateOne()

//export the ORM object in module.exports
var connection = require("../config/connection")

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
          }
        }

        return arr.toString();
    }

 //selectALL()
 var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

// insertOne()
create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

// updateOne()
update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE" + table;

    queryString += "SET";
    queryString += objToSql(objColVals);
    queryString += "WHERE";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) 
        throw err;
        cb(result)
      });
      },

      delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err,result) {
          if (err) {
            throw err;
          }

      cb(result);
    });
  }
}

  module.exports = orm;