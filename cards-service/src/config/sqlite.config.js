const path = require('path');
const sqlite3 = require('sqlite3');

const databasePath = path.resolve(__dirname, '../../../database.sqlite');

const sqliteClient = new sqlite3.Database(databasePath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = {sqliteClient};
