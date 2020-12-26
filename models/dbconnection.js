const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12383934',
    password: 'E3m7gzS5pc',
    database: 'sql12383934'
})

connection.connect((error) => {
    if (error) throw error;
});

module.exports = connection;