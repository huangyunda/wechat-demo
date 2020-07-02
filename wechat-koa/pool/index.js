const mysql = require('mysql');
const util = require('util');
const { mysqlConfig } = require('../config');
const pool = mysql.createPool(mysqlConfig);

pool.getConnection((err, connection) => {
  if (err) {
    console.log('connect error!!!', err)
    // if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    //   console.error('Database connection was closed.');
    // }
    // if (err.code === 'ER_CON_COUNT_ERROR') {
    //   console.error('Database has too many connections.');
    // }
    // if (err.code === 'ECONNREFUSED') {
    //   console.error('Database connection was refused.');
    // }
  }
  console.log('connected!!!');
  // if (connection) connection.release();

  return;
})

pool.query = util.promisify(pool.query);

module.exports = pool;