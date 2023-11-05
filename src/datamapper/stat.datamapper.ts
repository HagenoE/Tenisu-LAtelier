import pool from '../data/connexion.data'
const statsDatamapper = {
  /**
   * Retrieves the total winnings for each country.
   *
   * @return {Promise<any>} The result of the query.
   */
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
  /**
 * Retrieves data for a player.
 *
 * @return {Promise<any>} The data for the player.
 */
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
