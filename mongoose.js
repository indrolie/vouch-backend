const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/vouch')

const ticketsSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: 'open'
    },
    logs: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
}, {
        versionKey: false
    }
)

const Tickets = mongoose.model('Tickets', ticketsSchema)

const DUMMY_DATA = {
    name: 'Laxus',
    logs: 'Checking the issue...'
}

Tickets.insertMany(DUMMY_DATA).then(result => console.log(result))