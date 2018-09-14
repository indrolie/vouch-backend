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

const DUMMY_DATA = {
  name: 'Laxus',
  phoneNumber: '+62 349 28349',
  email: 'Laxus@email.com',
  description: 'Unable to access my account',
  logs: "I can't sign in to my account",
  updatedAt: new Date()
};

Tickets.insertMany(DUMMY_DATA).then(result => console.log(result));
