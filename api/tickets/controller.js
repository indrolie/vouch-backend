const Tickets = require('./model');
const Logs = require('../ticketLogs/model')
const Counter = require('./counter');

const getCounter = async () => {
  const result = await Counter.findOneAndUpdate(
    { name: 'ticketNumber' },
    { $inc: { ticketNumber: 1 } },
    { new: true }
  )

  if (result) {
    return result.ticketNumber;
  } else {
    console.log('Update failed...');
    throw new Error('[Counter] Update failed...');
  }
};

const controller = {
  showTickets: (req, res, next) => {
    Tickets.find()
      .then(response => res.status(200).send(response))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
  },

  showOneTicket: (req, res, next) => {
    Tickets.findOne({ ticketNumber: req.params.id })
      .then(response => res.status(200).send(response))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
  },

  createTicket: async (req, res, next) => {
    const result = await getCounter();

    const newTicket = {
      ticketNumber: result,
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      description: req.body.description,
      logs: req.body.logs,
      createdAt: req.body.createdAt
    };

    await Tickets.create(newTicket)
      .then(response => res.status(201).send({response, message: 'Ticket Created'}))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );

      const newLog = {
        ticketNumber: result,
        logs: req.body.logs,
        updatedAt: req.body.updatedAt
      };
      await Logs.create(newLog)
      .then(response => console.log(response))
      .catch(error =>console.log(error))
  },

  updateTicket: async (req, res, next) => {
    const data = {};

    await Tickets.findOneAndUpdate(
      { ticketNumber: req.params.id },
      {
        $set: {
          logs: req.body.logs,
          status: req.body.status,
          updatedAt: Date.now()
        }
      },
      { new: true }
    )
      .then(response => res.status(200).send({response, message: 'Ticket Updated'}))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
  },

  deleteTicket: async (req, res, next) => {
    await Tickets.findOneAndDelete({ ticketNumber: req.params.id })
    .then(response =>
      res.status(200).send({
        message: 'Ticket Deleted!'
      })
    )
    .catch(error =>
      res.status(400).send({
        message: error.message
      })
    );
  }
};

module.exports = controller;
