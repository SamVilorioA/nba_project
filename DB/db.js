require('dotenv/config');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DATABASE
});
db.connect(function(err){
    if(err){
        console.log('No se pudo establecer conexion con la base de datos.')
    }else{
        console.log('Conexion creada exitosamente.');
    }
});
module.exports = db