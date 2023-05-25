const express = require('express')
const dogodek = require('../controllers/dogodek')
const authToken = require('../middleware/session')
const router = express.Router()

router.post('/create', dogodek.ustvari)
router.get('/fetchAll', dogodek.vrniVse)
router.post('/:eventId/apply', dogodek.prijava)

module.exports = router
