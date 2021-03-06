const mysql = require('mysql2');
require('dotenv');

let sqlHost = process.env.SQL_HOST,
    sqlUser = process.env.SQL_USER,
    sqlPass = process.env.SQL_PASS;

const connection = mysql.createConnection({
    host: sqlHost,
    user: sqlUser,
    password: sqlPass,
    database: 'gp_test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();