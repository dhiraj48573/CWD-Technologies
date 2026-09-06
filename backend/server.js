require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Health Check Endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'CWD Technologies Backend API is running perfectly!',
    timestamp: new Date().toISOString()
  });
});

// Example Contact Form Endpoint Placeholder
app.post('/api/contact', (req, res) => {
  const data = req.body;
  console.log('Received lead:', data);
  
  // TODO: Add database, email, or CRM integration here
  
  res.json({
    success: true,
    message: 'Thank you! Your message has been received.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
