const mongoose = require('mongoose');

// Event Schema

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', EventSchema);
module.exports = User;
