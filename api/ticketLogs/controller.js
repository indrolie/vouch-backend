const Logs = require('./model');

const controller = {
  showLogById: async (req, res, next) => {
    await Logs.find({ ticketNumber: req.params.id })
    .then(response => res.status(200).send(response))
    .catch(error =>
      res.status(400).send({
        message: error.message
      })
    );
  },

  addLog: async (req, res, next) => {
    const newLog = {
      ticketNumber: req.body.ticketNumber,
      logs: req.body.logs,
      updatedAt: req.body.updatedAt
    };

    await Logs.create(newLog)
      .then(response => res.status(201).send({response, message: 'Ticket Updated'}))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
  }
};

module.exports = controller;
