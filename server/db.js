require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createPool({
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: 3306
});

module.exports = connection;