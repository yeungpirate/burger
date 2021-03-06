var connection = require('./connection.js');

var orm = {

    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table, colName, newBurger, cb) {
        var queryString = `INSERT INTO ${table} (${colName}) VALUES ('${newBurger}')`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, condition, cb) {
        var queryString = `UPDATE ${table} SET devoured = true WHERE ${condition};`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }

};

module.exports = orm;