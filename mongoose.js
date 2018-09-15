require('dotenv-extended').load({
  encoding: 'utf8',
  silent: true,
  path: '.env',
  defaults: '.env.defaults',
  schema: '.env.schema',
  errorOnMissing: false,
  errorOnExtra: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false
});

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://' + process.env.PRODUCTION_DB_HOST + ':' +
  process.env.PRODUCTION_DB_PORT + '/' + process.env.PRODUCTION_DB_NAME,
  {
    user: process.env.PRODUCTION_DB_USERNAME,
    pass: process.env.PRODUCTION_DB_PASSWORD
  }
);

const ticketsSchema = new mongoose.Schema(
  {
    ticketNumber: Number,
    name: String,
    phoneNumber: String,
    email: String,
    description: String,
    logs: String,
    status: {
      type: String,
      default: 'Open'
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

const DUMMY_TICKET = {
  name: 'Laxus',
  phoneNumber: '+62 349 28349',
  email: 'Laxus@email.com',
  description: 'Unable to access my account',
  logs: "I can't sign in to my account",
  updatedAt: new Date()
};

Tickets.insertMany(DUMMY_TICKET).then(result => console.log(result));

const counterSchema = new mongoose.Schema(
  {
      name: String,
      ticketNumber: Number
  },
  {
    versionKey: false
  }
);

const Counter = mongoose.model('Counters', counterSchema);

const DUMMY_COUNTER = {
  name: 'ticketNumber',
  ticketNumber: 100000
};

Counter.insertMany(DUMMY_COUNTER).then(result => console.log(result));
