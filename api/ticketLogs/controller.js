const Logs = require('./model');

const controller = {
  showLogById: async (req, res, next) => {
    await Logs.find({ ticketNumber: req.params.id }, (result, err) => {
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

  addLog: async (req, res, next) => {
    const newLog = {
      ticketNumber: req.body.ticketNumber,
      logs: req.body.logs
    };

    await Logs.create(newLog)
      .then(response => res.status(201).send(response))
      .catch(error =>
        res.status(400).send({
          message: error.message
        })
      );
  }
};

module.exports = controller;
