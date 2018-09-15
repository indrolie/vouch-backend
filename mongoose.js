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

//-------------------------------------------------------------------------------------------------------------------

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
    createdAt: String,
    updatedAt: String
  },
  {
    versionKey: false
  }
);

const Tickets = mongoose.model('Tickets', ticketsSchema);

const DUMMY_TICKET = {
  ticketNumber: '100000',
  name: 'Laxus',
  phoneNumber: '+62 349 28349',
  email: 'Laxus@email.com',
  description: 'Unable to access my account',
  logs: "I can't sign in to my account since this morning",
  createdAt: '03:03:48  16/09/2018',
  updatedAt: '03:03:48  16/09/2018'
};

Tickets.insertMany(DUMMY_TICKET).then(result => console.log(result));

//-------------------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------------------

const logsSchema = new mongoose.Schema(
  {
      ticketNumber: Number,
      logs: String
  },
  {
    versionKey: false
  }
);

const Logs = mongoose.model('Logs', logsSchema);

const DUMMY_LOGS = {
  ticketNumber: 100001,
  logs: "Checking the issue...",
  updatedAt: '07:03:48  16/09/2018'
};

Logs.insertMany(DUMMY_LOGS).then(result => console.log(result));
