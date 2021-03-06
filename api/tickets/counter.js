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
  mongoose.connect('mongodb://' + process.env.PRODUCTION_DB_HOST + ':' + process.env.PRODUCTION_DB_PORT + '/' + process.env.PRODUCTION_DB_NAME, {
      user: process.env.PRODUCTION_DB_USERNAME,
      pass: process.env.PRODUCTION_DB_PASSWORD
  });

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
  
  module.exports = Counter;
  