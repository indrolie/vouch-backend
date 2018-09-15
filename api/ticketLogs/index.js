const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/:id', controller.showLogById)
router.post('/add', controller.addLog)

module.exports = router