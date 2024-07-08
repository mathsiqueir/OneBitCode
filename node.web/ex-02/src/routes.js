const express = require('express')
const taskController = require('./controllers/taskController')
router = express.Router()

//home page
router.get('/', taskController.index)

module.exports = router