import pool from '../data/connexion.data'

const playerDatamapper = {

  /**
 * Retrieves all players from the database.
 *
 * @async
 * @returns {Promise<any>} A promise that resolves with the result of the query.
 */
  findAllPlayer: async () => {
    const connexion = await pool.connect()

    // const result = connexion.query('SELECT * FROM "players" order by "players"."data" ->>\'rank\' COLLATE "numeric" asc;')
    const result = connexion.query(`
    SELECT "players".*, "data"."rank"
    FROM "players"
    JOIN "data" ON "players"."id" = "data"."players_id"
    ORDER BY "data"."rank";
   `)
    connexion.release()
    return await result
  },

  /**
 * Finds a player by their ID.
 *
 * @param {number} id - The ID of the player.
 * @return {Promise<any>} A promise that resolves to the result of the query.
 */

  findOnePlayer: async (id: number) => {
    const connexion = await pool.connect()
    const query = {
      text: `SELECT 
      "players"."id","players"."firstname","players"."lastname", "players"."shortname","players"."sex","players"."picture",
      "country"."picture","country"."code",
      "data"."rank", "data"."points","data"."weight", "data"."height", "data"."age","data"."last"
      FROM "players"
      JOIN "country" ON "players"."id" = "country"."players_id" 
      JOIN "data" ON "players"."id" = "data"."players_id"
      WHERE "players"."id" = $1;
      `,
      values: [id]
    }

    const result = connexion.query(query)

    connexion.release()
    return await result
  }

}
export default playerDatamapper
