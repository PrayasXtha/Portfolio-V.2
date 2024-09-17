const express = require('express')
const app = express()
require("dotenv").config();
const dbConfig = require("./Config/dbConfig")
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listining at port ${port} `)
});
