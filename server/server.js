const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // To handle JSON data in requests
const cors = require('cors'); // Import CORS
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define allowed origins
const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];

// CORS options
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')); // Reject the request
        }
    }
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Serve static files from Angular app
app.use(express.static(path.join(__dirname, '../dist/student-enrollment-and-management-system/browser')));

// Hardcoded users
const users = [
  { username: 'testuser', password: 'password123@gmail.com' },
  { username: 'admin', password: 'adminpass@gmail.com' }
];

// Login API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).send({ success: false, message: 'Invalid username or password.' });
  }
});

// Catch-all route to serve Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/student-enrollment-and-management-system/browser/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});