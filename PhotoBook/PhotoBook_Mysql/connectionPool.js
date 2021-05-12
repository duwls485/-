const mysql = require('mysql');
const config = require('./db_config.json');

var pool = mysql.createPool(config);

function getConnection(callback){
    pool.getConnection(function(err, conn){
        callback(err, conn);
    });
};

module.exports = getConnection;
