import pool from '../data/connexion.data'
const statsDatamapper = {
  mostWinning: async () => {
    const connexion = await pool.connect()

    const result = await connexion.query(
    `
    SELECT "country"."code", sum("winning"."total") as total
    FROM "country"
    JOIN "winning" ON "winning"."players_id" = "country"."players_id"
    GROUP BY "country"."code";
        `)

    connexion.release()

    return result
  },
  getDataForPlayer: async () => {
    const connexion = await pool.connect()

    const result = await connexion.query(
      `
      SELECT * FROM "data";
      `
    )
    connexion.release()
    return result
  }
}

export default statsDatamapper
