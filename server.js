const express = require('express');
const path = require('path');
const { getComprehensiveData } = require('./app/api/comprehensive-data');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API routes
app.get('/api/comprehensive-data', getComprehensiveData);

// Serve the information.html page
app.get('/information', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'information.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Visit http://localhost:${PORT}/information to see the chart`);
}); 
