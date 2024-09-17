const mongoose = require('mongoose')

mongoose.connect (process.env.mongo_url, {
    useNewUrlParser: true,

});


const connection = mongoose.connection;

connection.on('error', () => {
        console.log("Error connecting to the database");
});

connection.on('connected', () => {
    console.log("Connected to the database");
});

module.exports = connection;