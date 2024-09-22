const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());

// Import routes
const dbConfig = require('../Config/dbConfig');
const portfolioRoute = require('../routes/portofolioRoute');

// Middleware for JSON body parsing
app.use(express.json());

// Define your routes
app.use('/api/portofolio', portfolioRoute);

// Export the app
module.exports = app;
