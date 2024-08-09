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
const logsSchema = new mongoose.Schema(
    {
        ticketNumber: Number,
        logs: String,
        updatedAt: String
    },
    {
		versionKey: false
    }
);
  
const Logs = mongoose.model('Logs', logsSchema);
module.exports = Logs;