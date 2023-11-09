import { type Request, type Response, type NextFunction } from 'express'
import playerOneDatamapper from '../datamapper/playerOne.datamapper'
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
    const result = await playerOneDatamapper.findAllPlayer()

    const players = result.rows

    return res.status(200).json({ players })
  },
  /**
 * Retrieves a single player by their ID.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Response} The response with the player data.
 */
  getOnePlayer: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await playerOneDatamapper.findOnePlayer(+id)
    console.log(result)
    const player = result.rows
    console.log(player)
    if (player.length === 0) {
      next(new CustomError(404, 'No player found'))
      return
    }

    return res.status(200).json({ player })
  }
}

export default playerController
