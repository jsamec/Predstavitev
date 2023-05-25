const pool = require("./db");

const Spanec = {};

Spanec.ustvariTabelo = async () => {
    console.log("ustvarjam tabelo spanec");
    const query = `CREATE TABLE IF NOT EXISTS spanec (
        id SERIAL PRIMARY KEY,
        id_uporabnika INT NOT NULL,
        datum DATE NOT NULL,
        cas INT NOT NULL,
        FOREIGN KEY (id_uporabnika) REFERENCES uporabniki(id)
    )`;
    
    const result = pool.query(query);
    return result;
};

Spanec.ustvari = async (userId, datum, cas) => {
    const query = `INSERT INTO spanec (id_uporabnika, datum, cas) VALUES ($1, $2, $3) RETURNING id_uporabnika`;
    const arr = [userId, datum, cas];

    const result = pool.query(query, arr);
    return result;
};

Spanec.posodobi = async (userId, datum, cas) => {
    const query = `UPDATE spanec SET cas = $1 WHERE id_uporabnika = $2 AND datum = $3 RETURNING id_uporabnika`;
    const arr = [cas, userId, datum];

    const result = pool.query(query, arr);
    return result;
};

Spanec.obstaja = async (userId, datum) => {
    const query = `SELECT * FROM spanec WHERE id_uporabnika = $1 AND datum = $2`;
    const arr = [userId, datum];

    const result = await pool.query(query, arr);
    return (result.rows.length > 0);
};

Spanec.vrniVse = async (userId) => {
    const query = `SELECT * FROM spanec WHERE id_uporabnika = $1`;
    const arr = [userId];

    const result = pool.query(query, arr);
    return result;
};

module.exports = Spanec;