const express = require('express');

const router = express.Router();

const Event = require('../../models/Event');

// Get all events

router.get('/', function(req, res) {
  res.send('List of Events');
});

module.exports = router;
