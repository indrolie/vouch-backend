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
  'mongodb://' +
    process.env.PRODUCTION_DB_HOST +
    ':' +
    process.env.PRODUCTION_DB_PORT +
    '/' +
    process.env.PRODUCTION_DB_NAME,
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
    createdAt: String,
    updatedAt: String
  },
  {
    versionKey: false
  }
);

const Tickets = mongoose.model('Tickets', ticketsSchema);

module.exports = Tickets;
