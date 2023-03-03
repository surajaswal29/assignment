// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');

// initializing express
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes
const product = require('./routes/productRoutes');

app.use('/api/v1',product);


module.exports = app;