const Uporabnik = require('../models/Uporabnik')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
JWT_SECRET = 'mysecretkey123'
// CONTROLLER
const uporabnik = {}

uporabnik.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body.data

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  await Uporabnik.register(firstName, lastName, email, hashedPassword)
  res.status(200).json({ success: true, message: 'Uspešna registracija.' })
}

uporabnik.login = async (req, res) => {
  try {
    const { email, password } = req.body.payload
    const userDb = await Uporabnik.najdiEmail(email)
    if (!userDb) {
      return res.status(401).json({ message: 'Uporabnik ne obstaja.' })
    }

    const match = await bcrypt.compare(password, userDb.geslo)
    if (!match) {
      return res.status(401).json({ message: 'Napačno geslo' })
    }
    console.log(userDb)
    const token = jwt.sign(
      { id: userDb.id, ime: userDb.ime, email: userDb.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return res.status(200).json({
      token
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

uporabnik.imaSejo = async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization header' })
  }
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(decoded)
    return res.json({ success: true })
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = uporabnik
