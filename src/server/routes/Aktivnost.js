const express = require('express')
const router = express.Router()
const aktivnost = require('../controllers/aktivnost')

router.post('/create', aktivnost.ustvari)
router.get('/fetchOwn', aktivnost.vrniPoId)
router.get('/fetchAll', aktivnost.vrniVse)
router.post('/create_hrana', aktivnost.ustvari_hrana)
router.get('/getLeaderboard', aktivnost.vrniLeaderboard)
router.get('/getUserAct/:userId', aktivnost.vrniUporabnikoveAktivnosti)
router.post('/ustvariSpanec', aktivnost.ustvariSpanec)
router.get('/vrniSpanec', aktivnost.vrniSpanec)

module.exports = router
