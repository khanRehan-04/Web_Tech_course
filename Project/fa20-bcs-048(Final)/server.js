const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
let employees = [
  // Existing employee records
];

// Route to get all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Route to add a new employee
app.post('/employees', (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Serve the HTML file for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
