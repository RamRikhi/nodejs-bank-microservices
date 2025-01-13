const path = require('path');
const mysql = require('mysql2/promise');
const sqlite3 = require('sqlite3');


const databasePath = path.resolve(__dirname, '..\\..\\database.sqlite');

const mysqlClient = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});


const sqliteClient = new sqlite3.Database(databasePath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = {sqliteClient, mysqlClient};
