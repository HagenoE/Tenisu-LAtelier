import { type NextFunction, type Request, type Response } from 'express'
import statsDatamapper from '../datamapper/stat.datamapper'

import CustomError from '../error/app.error'

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
    const dataFromDb = await statsDatamapper.mostWinning()
    const arrayToFilter = dataFromDb.rows

    if (arrayToFilter.length === 0) {
      next(new CustomError(400, 'There is no winner recorded'))
      return
    }

    const findMaxValue = arrayToFilter.reduce((prev, cur) => {
      return prev.total > cur.total ? prev : cur
    })

    const findAllMaxValue = arrayToFilter.filter((element) => element.total === findMaxValue.total)
    console.log(findAllMaxValue)
    return res.status(200).json({ winner: findAllMaxValue })
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
    const datas = await statsDatamapper.getDataForPlayer()

    if (datas.rows.length === 0) {
      next(new CustomError(400, 'No data found'))
      return
    }
    const playerImc = datas.rows.map((element) => {
      const imc = (element.weight / 1000) / ((element.height / 100) * (element.height / 100))
      return imc
    })

    const sumIMC = playerImc.reduce((acc, cur) => acc + cur, 0)
    const averageImc = sumIMC / playerImc.length

    return res.status(200).json({ averageImc })
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
    const datas = await statsDatamapper.getDataForPlayer()

    if (datas.rows.length === 0) {
      next(new CustomError(400, 'No data found'))
      return
    }

    // Create a new array with only the height and sort asc
    const allHeight = datas.rows.map((element) => element.height).sort((a, b) => a - b)

    const mid = Math.floor(allHeight.length / 2)
    const result = allHeight[mid]

    return res.status(200).json({ medianeHeight: result })
  }
}

export default statsControlleur
