const express = require('express');

const router = express.Router();

// Get all events

router.get('/', function(req, res) {
  res.send('List of Events');
});

module.exports = router;
