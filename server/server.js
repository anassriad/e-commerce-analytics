// Setup
import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import authRoutes from './auth.js';

// Load environment variables
dotenv.config();

const app = express();
const port = 2000;

// Middleware to parse JSON
app.use(express.json());

// Create a connection to MySQL database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Test the Database Connection
connection.connect((err) => { 
  if (err) {
    console.log('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// Use authentication routes
app.use('/auth', authRoutes);

// GET ROOT
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// GET USERS from the database
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching data', details: err.message });
      return;
    }
    res.json(results);
  });
});

// CLOSE DATABASE CONNECTION on exit
process.on('SIGINT', () => {
  connection.end(() => {
    console.log('Closed MySQL connection.');
    process.exit(0);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
