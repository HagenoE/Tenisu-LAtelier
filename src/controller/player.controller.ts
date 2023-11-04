import { type Request, type Response, type NextFunction } from 'express'
import playerDatamapper from '../datamapper/player.datamapper'
import CustomError from '../error/app.error'

const playerController = {
  getAllPlayer: async (req: Request, res: Response) => {
    const result = await playerDatamapper.findAllPlayer()

    const players = result.rows

    return res.status(200).json({ players })
  },

  getOnePlayer: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await playerDatamapper.findOnePlayer(+id)

    const [player] = result.rows

    if (player.length === 0) {
      next(new CustomError(400, 'No player found'))
      return
    }

    return res.status(200).json({ player })
  }
}

export default playerController
