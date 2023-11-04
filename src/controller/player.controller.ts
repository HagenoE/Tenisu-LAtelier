import { type Request, type Response, type NextFunction } from 'express'
import playerDatamapper from '../datamapper/player.datamapper'
import CustomError from '../error/app.error'

const playerController = {
  getAllPlayer: async (req: Request, res: Response): Promise<void> => {
    const result = await playerDatamapper.findAllPlayer()

    const players = result.rows
    console.log(players)
    res.status(200).json({ players })
  },

  getOnePlayer: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params
    const result = await playerDatamapper.findOnePlayer(+id)

    const player = result.rows
    console.log(player)

    if (player.length === 0) {
      next(new CustomError(400, 'No player found'))
      return
    }

    res.status(200).json({ player })
  }
}

export default playerController
