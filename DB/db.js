require('dotenv/config');
const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});
module.exports = db