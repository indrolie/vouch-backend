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
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

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