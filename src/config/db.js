const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mi_api'
});

connection.connect((err)=> {
    if (err) throw err;
    console.log('conexión exitosa a la base de datos');
});

module.exports =connection;