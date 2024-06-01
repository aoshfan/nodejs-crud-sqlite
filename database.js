// database.js

// const db = new sqlite3.Database(':memory:');
// database.js
const sqlite3 = require('sqlite3').verbose();

// Specify the path to the database file
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)', (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table exists or has been created.');
      }
    });
  }
});

module.exports = db;


module.exports = db;
