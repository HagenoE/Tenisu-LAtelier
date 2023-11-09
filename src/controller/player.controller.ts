import { type Request, type Response, type NextFunction } from 'express'
import playerDatamapper from '../datamapper/player.datamapper'
import CustomError from '../error/app.error'

const playerController = {
  /**
   * Retrieves all players.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @returns {Promise<void>} The response with the players.
   */
  getAllPlayer: async (req: Request, res: Response) => {
    const result = await playerDatamapper.findAllPlayer()

    const players = result.rows

    return res.status(200).json({ players })
  },
  /**
 * Retrieves a single player from the database.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Response} The response object containing the player details.
 */
  getOnePlayer: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    const result = await playerDatamapper.findOnePlayer(+id)
    const player = result.rows

    if (player.length === 0) {
      next(new CustomError(404, 'No player found'))
      return
    }
    console.log(5)
    return res.status(200).json({ player })
  }
}

export default playerController
