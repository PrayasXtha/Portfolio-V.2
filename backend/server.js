const express = require('express')
const app = express()
const cors = require('cors');

require("dotenv").config();
// Enable CORS for all routes
app.use(cors());

const dbConfig = require("./Config/dbConfig")


const portfolioRoute = require('./routes/portofolioRoute')

app.use(express.json());
app.use("/api/portofolio", portfolioRoute);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listining at port ${port} `)
});


module.exports = app;