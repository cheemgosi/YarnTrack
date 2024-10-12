const express = require('express');
const cors = require('cors');
const messageRoutes = require('../routes/messageRoutes'); // Import routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/message', messageRoutes);

module.exports = app;  // Export the configured app
