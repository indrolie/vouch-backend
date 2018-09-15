const Tickets = require('./model');
const Counter = require('./counter');

const getCounter = async () => {
  return new Promise((resolve, reject) => {
    Counter.findOneAndUpdate(
      { name: 'ticketNumber' },
      { $inc: { ticketNumber: 1 } },
      { new: true },
      function(err, doc) {
        if (doc) {
          resolve (doc.ticketNumber);
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
  }
};

module.exports = controller;
