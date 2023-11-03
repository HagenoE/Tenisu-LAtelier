import { Pool } from 'pg'

const connexionData = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
}

const pool = new Pool(connexionData)

pool.on('error', (err, client) => {
  console.error(err)
  process.exit(-1)
})

export default pool
