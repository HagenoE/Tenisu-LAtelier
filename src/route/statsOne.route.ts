/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import statsController from '../controller/statOne.controller'
import errorWrapper from '../error/errorWrapper.error'
import CustomError from '../error/app.error'

const statsRouter = Router()

/**
 * @typedef {object} ErrorResponse Returned error to user into HTTP response
 * @property {string} error error reason
 */

/**
* @typedef {object} StatImcResponse
* @property {string} status - success
* @property {string} averageImc - the avarage IMC value
*/

/**
* @typedef {object} WinResponse
* @property {string} status - success
* @property {string} winner - array of the country who win the most
*/

/**
* @typedef {object} AverageHeightResponse
* @property {string} status - success
* @property {string} winner - the mediane height value
*/

statsRouter.route('/win')
/**
 * GET /stats/win
 * @summary return an array of most winning country
 * @return {WinResponse} 200 - success response
 *  @return {ErrorResponse} 400 - no data found
 */
  .get(errorWrapper(statsController.getMostWinning))
statsRouter.route('/imc')
/**
 * GET /stats/imc
 * @summary return an array of all players recorded
 * @return {StatImcResponse} 200 - success response
 *  @return {ErrorResponse} 400 - no data found
 */
  .get(errorWrapper(statsController.averageImc))
statsRouter.route('/hgt')
/**
 * GET /stats/hgt
 * @summary return the medium height
 * @return {AverageHeightResponse} 200 - success response
 *  @return {ErrorResponse} 400 - no data found
 */
  .get(errorWrapper(statsController.averageHeight))

statsRouter.all('*', (req, res, next) => {
  next(new CustomError(404, 'Not Found'))
})

export default statsRouter
