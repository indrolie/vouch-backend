const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/vouch')

const ticketsSchema = new mongoose.Schema({
    name: String,
    status: String,
    logs: String
})

const Tickets = mongoose.model('Tickets', ticketsSchema)

const DUMMY_DATA = {
    name: 'Laxus',
    status: 'Open',
    logs: 'Checking the issue...'
}

Tickets.insertMany(DUMMY_DATA).then(result => console.log(result))