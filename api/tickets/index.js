const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.showTickets)
router.post('/create', controller.createTicket)

module.exports = router