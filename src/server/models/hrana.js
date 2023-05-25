const pool = require("./db");

const Hrana = {};

Hrana.ustvari_hrana = async (userId, ime, datum, obrok, kolicina, kalorije, oh, mascobe, beljakovine) => {
  const query =
    "INSERT INTO hrana (id_uporabnika, ime, dan, obrok, kolicina, kalorije, ogljikovi_hidrati, mascobe, beljakovine) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id_uporabnika";
  const arr = [userId, ime, datum, obrok, kolicina, kalorije, oh, mascobe, beljakovine];

  const result = await pool.query(query, arr);
  return result;
};

module.exports = Hrana;