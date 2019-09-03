const express = require('express');
const cors = require('cors');
const chalk = require('chalk');

// Init Express
const app = express();

// Init Port
const PORT = process.env.PORT || 4000;

// Init Cors Middleware
app.use(cors());

// Init Built-In Body Parser
app.use(express.json({ extended: false }));

// Default / Port
app.get('/', (req, res) => {
  res.send('API Connected');
});
// Routes
app.use('/api/events', require('./routes/api/events'));

app.listen(PORT, () =>
  console.log(chalk.blue.inverse(`Server Connected [Port: ${PORT}])`))
);
