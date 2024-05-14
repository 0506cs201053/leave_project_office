const mysql = require('mysql');

const emalConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Suraj@123',
  database: 'task'
});

module.exports = emalConnection;