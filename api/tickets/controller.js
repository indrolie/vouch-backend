const Tickets = require('./model');
const Counter = require('./counter');

const getCounter = async () => {
  return new Promise((resolve, reject) => {
    Counter.findOneAndUpdate(
      { name: 'ticketNumber' },
      { $inc: { ticketNumber: 1 } },
      { new: true },
      (err, result) => {
        if (result) {
          resolve(result.ticketNumber);
        } else {
          console.log('Update failed...');
          reject();
        }
      }
    );
  });
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
    Tickets.findOne({ ticketNumber: req.params.id }, (result, err) => {
      if (result) {
        console.log(result);
      }
    })
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
      logs: req.body.logs
    };

    await Tickets.create(newTicket)
      .then(response => res.status(201).send(response))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
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
      { new: true },
      (result, err) => {
        if (result) {
          console.log(result);
        }
      }
    )
      .then(response => res.status(200).send(response))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
  },

  deleteTicket: async (req, res, next) => {
    await Tickets.findOneAndRemove(
      { ticketNumber: req.params.id },
      (result, err) => {
        if (result) {
          console.log(result);
        }
      }
    )
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
