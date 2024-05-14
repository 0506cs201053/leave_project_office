// backend/config/dbConfig.js

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Suraj@123',
  database: 'task'
});
module.exports = db;
