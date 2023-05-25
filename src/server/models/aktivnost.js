const pool = require('./db')

const Aktivnost = {}

Aktivnost.ustvari = async (payload, userId) => {
  const query =
    'INSERT INTO aktivnosti (id_uporabnik, ime, energija, datum) VALUES ($1, $2, $3, $4) RETURNING id'
  const arr = [userId, payload.ime, payload.energija, payload.datum]

  const result = await pool.query(query, arr)
  console.log(result)
  return result
}

Aktivnost.vrniPoId = async userId => {
  const query = `  
  SELECT id, ime, energija, datum
  FROM aktivnosti
  WHERE id_uporabnik = $1
  `

  const arr = [userId]
  const { rows: aktivnosti } = await pool.query(query, arr)
  return aktivnosti
}

Aktivnost.vrniVse = async () => {
  const query = `  
  SELECT a.id, a.ime, a.energija, a.datum, a.id_uporabnik, u.ime AS uporabnik_ime
  FROM aktivnosti AS a
  JOIN uporabniki AS u ON a.id_uporabnik = u.id
  `

  const { rows: aktivnosti } = await pool.query(query)
  console.log(aktivnosti)
  return aktivnosti
}

Aktivnost.vrni_aktivni_dan = async (userId, datum) => {
  const query = `
  SELECT id_uporabnika, tocke, datum
  FROM aktivni_dnevi
  WHERE id_uporabnika = $1 AND datum = $2
  `
  const arr = [userId, datum]
  const { rows: aktivni_dan } = await pool.query(query, arr)
  return aktivni_dan
}

Aktivnost.ustvari_aktivni_dan = async (userId, datum) => {
  const query =
    'INSERT INTO aktivni_dnevi (id_uporabnika, tocke, datum) VALUES ($1, $2, $3) RETURNING id_uporabnika'
  const arr = [userId, 0, datum]

  const result = await pool.query(query, arr)
  return result
}

Aktivnost.posodobi_aktivni_dan = async (userId, tocke, datum) => {
  const query =
    'UPDATE aktivni_dnevi SET tocke = $1 WHERE id_uporabnika = $2 AND datum = $3 RETURNING id_uporabnika'
  const arr = [tocke, userId, datum]

  const result = await pool.query(query, arr)
  return result
}

Aktivnost.vrniTocke = async uporabnikId => {
  const query = `
  SELECT SUM(tocke) AS tocke
  FROM aktivni_dnevi
  WHERE id_uporabnika = $1
  `
  const arr = [uporabnikId]

  const result = await pool.query(query, arr)
  return result
}

Aktivnost.vrniUporabnikoveAktivnosti = async userId => {
  const query = `  
  SELECT a.id, a.ime, a.energija, a.datum, a.id_uporabnik, u.ime AS uporabnik_ime
  FROM aktivnosti AS a
  JOIN uporabniki AS u ON a.id_uporabnik = u.id
  WHERE u.id = $1
  `

  const arr = [userId]
  const { rows: aktivnosti } = await pool.query(query, arr)
  console.log(aktivnosti)
  return aktivnosti
}

module.exports = Aktivnost
