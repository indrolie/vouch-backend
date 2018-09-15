const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.showTickets)
router.get('/:id', controller.showOneTicket)
router.post('/create', controller.createTicket)
router.put('/:id', controller.updateTicket)
router.delete('/:id', controller.deleteTicket)

module.exports = router