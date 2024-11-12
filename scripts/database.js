// database.js
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database or create it if it doesn't exist
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error("Error opening database", err.message);
    }
    console.log("Connected to the SQLite database.");
});

// Create users table if it doesn't exist
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password TEXT
        )
    `);
});

module.exports = db;
