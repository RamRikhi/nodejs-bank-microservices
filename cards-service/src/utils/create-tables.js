const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to your SQLite database file
const databasePath = path.resolve(__dirname, '../../database.sqlite');

// Create and open the SQLite database connection
const db = new sqlite3.Database(databasePath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create the cards table
const createCardsTable = `CREATE TABLE IF NOT EXISTS cards (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            card_holder_name TEXT NOT NULL,
                            card_type TEXT NOT NULL,
                            card_number TEXT NOT NULL,
                            expiry_date TEXT NOT NULL
                        );`;

db.run(createCardsTable, (err) => {
    if (err) {
        console.error('Error creating cards table ' + err.message);
    } else {
        console.log('Cards table created successfully.');
    }
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database ' + err.message);
    } else {
        console.log('Database connection closed.');
    }
});