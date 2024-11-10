const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

app.use(express.static('public')); // Assuming your static files are in a 'public' directory

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ben11022003',
    database: 'angular_project'
});

app.get('/', (req, res) => {
    res.redirect('/login');
});


app.post('/admin/login', (req, res) => {
    const { adminUsername, adminPassword } = req.body;
  
    // Query the admin table to find the admin by username
    db.query('SELECT * FROM ADMIN WHERE USERNAME = ? AND PASSWORD = ?', [adminUsername, adminPassword], (error, results) => {
      if (error) {
        console.error('Error querying admin database:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
  
      if (results.length === 0) {
        // Admin credentials not found
        return res.status(401).json({ success: false, message: 'Invalid admin username or password' });
      }
  
      // Admin login successful
      res.status(200).json({ success: true, message: 'Admin login successful' });
    });
});


// Endpoint to fetch adoption center data
app.get('/api/adoption-centers', (req, res) => {
    let sql = 'SELECT * FROM ADOPTIONTABLE';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        res.json(result);
    });
});




// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Query the database to find the user by username
    db.query('SELECT * FROM LOGIN WHERE USERNAME = ?', [username], (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
  
        if (results.length === 0) {
            // Username not found
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
  
        const user = results[0];
  
        // Check password
        if (user.PASSWORD !== password) {
            // Password does not match
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
  
        // Login successful
        res.status(200).json({ success: true, message: 'Login successful' });
    });
});



// Routes
// Example: Get all pets
app.get('/api/pets', (req, res) => {
    let sql = 'SELECT * FROM pets';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// Registration endpoint
app.post('/register', (req, res) => {
    const { fullname, email, password } = req.body;

    // Insert the registration data into the database
    const sql = 'INSERT INTO login (full_name, username, password) VALUES (?, ?, ?)';
    db.query(sql, [fullname, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ message: 'Error registering user' });
        } else {
            console.log('User registered successfully');
            res.status(200).json({ message: 'User registered successfully' });
        }
    });
});

// Endpoint to add a new adoption center
app.post('/api/adoption-centers', (req, res) => {
    const { location, phone, pincode } = req.body;
    const sql = 'INSERT INTO ADOPTIONTABLE (location, phone, pincode) VALUES (?, ?, ?)';
    db.query(sql, [location, phone, pincode], (err, result) => {
        if (err) {
            console.error('Error adding adoption center:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        console.log('Adoption center added successfully');
        res.status(200).json({ success: true, message: 'Adoption center added successfully' });
    });
});




// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


