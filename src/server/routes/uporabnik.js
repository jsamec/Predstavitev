const express = require('express')
const uporabnik = require('../controllers/uporabnik')
const router = express.Router()

router.post('/register', uporabnik.register)
router.post('/login', uporabnik.login)
router.get('/hasSession', uporabnik.imaSejo)

module.exports = router
