import pg from 'pg'
import { type z } from 'zod'
import { type ConnexionSchema } from '../@types/d'

const connexionData: z.infer<typeof ConnexionSchema> = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT)
}

const pool = new pg.Pool(connexionData)

pool.on('error', (err, client) => {
  console.error(err)
  process.exit(-1)
})

export default pool
