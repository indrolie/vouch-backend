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