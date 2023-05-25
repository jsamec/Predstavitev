const jwt = require('jsonwebtoken')
JWT_SECRET = 'mysecretkey123'

const checkSession = async (req, res) => {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    console.log('ni headerja')
    return res.status(401).json({ error: 'No authorization header' })
  }
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(decoded)
    return decoded
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = checkSession
