var mysql = require('mysql');

const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'student',
});

module.exports = pool;