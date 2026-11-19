require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// Basic Health Check Endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'CWD Technologies API Gateway',
    location: 'Haridwar, Uttarakhand, India',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Lead Intake Endpoint
app.post('/api/contact', (req, res) => {
  const { name, company, email, phone, service, budget, timeline, preferredContact, message } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and phone number are required fields.'
    });
  }

  const newLead = {
    name,
    company: company || 'N/A',
    email,
    phone,
    service: service || 'General',
    budget: budget || 'To be discussed',
    timeline: timeline || 'Flexible',
    preferredContact: preferredContact || 'WhatsApp',
    message: message || '',
    receivedAt: new Date().toISOString()
  };

  console.log('[CWD TECHNOLOGIES INCOMING LEAD]', newLead);
  
  res.json({
    success: true,
    message: 'Lead received and processed successfully by CWD Technologies backend.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`CWD Technologies API running on port ${PORT}`);
});
