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
    select * from ranking
    where total = ( select MAX(total) from ranking)
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
