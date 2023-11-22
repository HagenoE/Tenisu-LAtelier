import { type NextFunction, type Request, type Response } from 'express'
import statsOneDatamapper from '../datamapper/statOne.datamapper'
import CustomError from '../error/app.error'
import getImc from '../service/imc.service'
import getAverageHeight from '../service/averageHeight.service'

const statsControlleur = {
  /**
   * Retrieves the most winning data from the database and returns it as a JSON response.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next middleware function.
   * @returns {Promise<void>} - The function does not return anything directly, but it sends a response to the client.
   */
  getMostWinning: async (req: Request, res: Response, next: NextFunction) => {
    const dataFromDb = await statsOneDatamapper.mostWinning()
    const result = dataFromDb.rows

    if (result.length === 0) {
      next(new CustomError(404, 'There is no winner recorded'))
      return
    }

    return res.status(200).json({ winner: result })
  },

  /**
 * Calculates the average IMC (Body Mass Index) for players.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function to call.
 * @returns {Response} The response object with the average IMC.
 */
  averageImc: async (req: Request, res: Response, next: NextFunction) => {
    const datas = await statsOneDatamapper.getDataForPlayer()

    const dataArray = datas.rows.map((element) => element.data)

    if (datas.rows.length === 0) {
      next(new CustomError(404, 'No data found'))
      return
    }
    const result = getImc(dataArray)

    return res.status(200).json({ averageImc: result })
  },

  /**
   * Calculates the average height of players.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The Express next middleware function.
   * @returns {Promise<void>} - The function does not return anything directly, but it sends a response to the client.
   */
  averageHeight: async (req: Request, res: Response, next: NextFunction) => {
    const datas = await statsOneDatamapper.getDataForPlayer()

    const dataArray = datas.rows.map((element) => element.data)

    if (datas.rows.length === 0) {
      next(new CustomError(404, 'No data found'))
      return
    }
    const result = getAverageHeight(dataArray)

    return res.status(200).json({ medianeHeight: result })
  }
}

export default statsControlleur
