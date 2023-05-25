const pool = require('./db')

const Dogodek = {}

Dogodek.ustvari = async (payload, userId) => {
  const query =
    'INSERT INTO dogodki (id_organizatorja, datum, ime, opis, lokacija) VALUES ($1, $2, $3, $4, $5) RETURNING id_dogodka'
  const arr = [
    userId,
    payload.datum,
    payload.ime,
    payload.opis,
    payload.lokacija
  ]

  const result = await pool.query(query, arr)
  const { id_dogodka } = result
  return id_dogodka
}

Dogodek.vrniVse = async userId => {
  const query = `  
  SELECT
  d.id_dogodka,
  d.ime,
  d.datum,
  d.opis,
  d.lokacija,
  EXISTS (
    SELECT 1
    FROM prijave AS a
    WHERE a.id_dogodka = d.id_dogodka
    AND a.id_uporabnika = $1
  ) AS je_prijavil
  FROM dogodki AS d;
  `

  const arr = [userId]
  const { rows: dogodki } = await pool.query(query, arr)
  return dogodki
}

Dogodek.prijava = async (userId, eventId) => {
  console.log(userId)
  console.log(eventId)
  const query =
    'INSERT INTO prijave (id_uporabnika, id_dogodka) VALUES ($1, $2)'
  const arr = [userId, eventId]

  const { rows: dogodki } = await pool.query(query, arr)
  return dogodki
}

module.exports = Dogodek
