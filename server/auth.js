import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2';

const router = express.Router();

// MySQL Database Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ error: 'User not found' });

    const user = results[0];

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    // Generate JWT Token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, role: user.role });
  });
});

// Sign-Up Route
router.post('/signup', async (req, res) => {
  const { username, password, role } = req.body;

  // Check if all required fields are provided
  if (!username || !password || !role) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  // Check if the username already exists
  connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) return res.status(400).json({ error: 'Username already taken' });

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    connection.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role], (err, results) => {
      if (err) return res.status(500).json({ error: 'Failed to register user' });

      // Optionally, generate JWT Token for the new user
      const token = jwt.sign({ id: results.insertId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(201).json({ message: 'User registered successfully', token, role });
    });
  });
});

export default router;
