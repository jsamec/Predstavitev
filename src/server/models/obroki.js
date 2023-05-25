const pool = require('./db')

const Obrok = {}

Obrok.ustvari_obrok = async (userId, obrok, datum) => {
    const query =
      'INSERT INTO obroki (id_uporabnika, obrok, dan) VALUES ($1, $2, $3) RETURNING id_uporabnika'
    const arr = [userId, obrok, datum]
  
    const result = await pool.query(query, arr)
    return result
  }

module.exports = Obrok