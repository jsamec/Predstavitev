const authToken = require('../middleware/session')
const checkSession = require('../middleware/session')
const Dogodek = require('../models/dogodek')
JWT_SECRET = 'mysecretkey123'

const dogodek = {}

dogodek.ustvari = async (req, res) => {
  const { payload } = req.body
  const { id: userId } = await checkSession(req, res)
  const dogodekId = await Dogodek.ustvari(payload, userId)
  if (dogodekId) return res.status(200)
}

dogodek.vrniVse = async (req, res) => {
  const { id: userId } = await checkSession(req, res)
  if (userId) {
    const dogodki = await Dogodek.vrniVse(userId)
    if (dogodki) return res.status(200).json(dogodki)
  }
}

dogodek.prijava = async (req, res) => {
  const { eventId } = req.params
  const { id: userId } = await checkSession(req, res)
  if (userId) {
    const dogodek = await Dogodek.prijava(userId, eventId)
    if (dogodek) return res.status(200).json(dogodek)
  }
}

module.exports = dogodek
