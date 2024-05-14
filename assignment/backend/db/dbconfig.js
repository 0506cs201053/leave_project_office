const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Suraj@123',
  database: 'task'
});

module.exports = connection;