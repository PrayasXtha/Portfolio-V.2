const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();
// Enable CORS for all routes
app.use(cors());
const dbConfig = require("./Config/dbConfig");
const portfolioRoute = require('./routes/portofolioRoute');

app.use(express.json());
app.use("/api/portofolio", portfolioRoute);

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;