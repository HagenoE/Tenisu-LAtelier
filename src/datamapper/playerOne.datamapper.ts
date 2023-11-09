import pool from '../data/connexion.data'

const playerDatamapper = {

  /**
 * Retrieves all players from the database.
 *
 * @async
 * @returns {Promise<any>} A promise that resolves with the result of the query.
 */
  findAllPlayer: async (): Promise<any> => {
    const connexion = await pool.connect()

    const result = await connexion.query('SELECT * FROM "players_one" order by "players"."data" ->>\'rank\' COLLATE "numeric" asc;')
    connexion.release()
    return result
  },

  /**
 * Finds a player by their ID.
 *
 * @param {number} id - The ID of the player.
 * @return {Promise<any>} A promise that resolves to the result of the query.
 */
  findOnePlayer: async (id: number): Promise<any> => {
    const connexion = await pool.connect()
    const query = {
      text: `
      SELECT 
      "players"."id","players"."firstname","players"."lastname", "players"."shortname","players"."sex","players"."picture",
      "players". "country" ->> 'picture', "players"."country" ->> 'code',
      "players"."data" ->> 'rank',  "players"."data" ->> 'points', "players"."data" ->> 'weight',  "players"."data" ->> 'height', 
      "players"."data" ->>'age', "players"."data" ->>'last'
      FROM "players_one" AS players
      WHERE "players"."id" = $1;
      `,
      values: [id]
    }

    const result = await connexion.query(query)
    connexion.release()

    return result
  }

}
export default playerDatamapper
