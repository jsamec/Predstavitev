const { Pool } = require('pg')

const pool = new Pool({
  user: 'itsijqrn',
  host: 'horton.db.elephantsql.com',
  database: 'itsijqrn',
  password: 'AaxYk-cpeGM_9So5BPFF6POi3VKd5_Rr',
  port: 5432 // default PostgreSQL port
})

module.exports = pool
