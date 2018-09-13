const Tickets = require('./model')

const controller = {
    showTickets: (req, res, next) => {
        Tickets.find()
            .then(response => res.status(200).send(response))
            .catch(error =>
                res.status(400).send({
                    message: error.message
                })
            )
    },

    createTicket: async (req, res, next) => {
        const newTicket = {
            name: req.body.name,
            status: req.body.status,
            logs: req.body.logs
        }

        await Tickets.create(newTicket)
            .then(response => res.status(201).send(response))
            .catch(error =>
                res.status(400).send({
                    message: error.message
                })
            )
    }
}

module.exports = controller