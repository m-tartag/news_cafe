const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const connectDB = require('./config/db');
var path = require('path'); 

// Init Express
const app = express();

// Init Port
const PORT = process.env.PORT || 4000;

// Init Cors Middleware
app.use(cors());

// Connect to DB
connectDB();

// Init Built-In Body Parser
app.use(express.json({ extended: false }));

// Default / Port
// app.get('/', (req, res) => {
//   res.send('API Connectefdhjsdfhgsdd');
// });

//show index.html 
app.use(express.static(__dirname + "/client/public"));



app.listen(PORT, () =>
  console.log(chalk.blue.inverse(`Server Connected [Port: ${PORT}])`))
);
