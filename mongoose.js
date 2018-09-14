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
mongoose.connect('mongodb://' + process.env.DEVELOPMENT_DB_HOST + ':' + process.env.DEVELOPMENT_DB_PORT + '/' + process.env.DEVELOPMENT_DB_NAME, {
    user: process.env.DEVELOPMENT_DB_USERNAME,
    pass: process.env.DEVELOPMENT_DB_PASSWORD
});

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
