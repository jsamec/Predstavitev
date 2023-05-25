const pool = require('./db')

const Uporabnik = {}

Uporabnik.register = async (firstName, lastName, email, password) => {
  const status = 'uporabnik'
  const query =
    'INSERT INTO uporabniki (ime, priimek, email, geslo, status) VALUES ($1, $2, $3, $4, $5) RETURNING id'
  const arr = [firstName, lastName, email, password, status]

  const result = await pool.query(query, arr)
  const { id } = result
  return id
}

Uporabnik.najdiEmail = async mail => {
  const query =
    'SELECT id, ime, email, geslo, status FROM uporabniki WHERE email = $1'
  const arr = [mail]
  const { rows } = await pool.query(query, arr)
  return rows[0]
}

Uporabnik.vrniVse = async () => {
  const query = `
  SELECT id, ime, priimek
  FROM uporabniki
  `
  const { rows: uporabniki } = await pool.query(query)
  return uporabniki
}

module.exports = Uporabnik
