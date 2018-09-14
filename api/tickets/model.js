const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vouch');

const ticketsSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    email: String,
    description: String,
    logs: String,
    status: {
      type: String,
      default: 'open'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: Date
  },
  {
    versionKey: false
  }
);

const Tickets = mongoose.model('Tickets', ticketsSchema);

module.exports = Tickets;
