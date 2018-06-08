var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err,
            result) {
            if (err) throw err;
            cb(result)
        })
    },

        update: function(tableInput, condition, callback){
        console.log('UPDATE ' + tableInput + ' SET devoured = true WHERE id = ' + condition);
        var queryStringUpdate = 'UPDATE ' + tableInput + ' SET devoured = true WHERE id = ' + condition;
        connection.query(queryStringUpdate, function(err, result){
            if(err)throw err;
            callback(result);
        })
    },


    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput +" (burger_name) VALUES ('"+val+"');", function(err,result){
            if (err) throw err; 
            cb(result);
        })
}
}

module.exports = orm;