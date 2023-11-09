/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import errorWrapper from '../error/errorWrapper.error'
import playerController from '../controller/player.controller'
import CustomError from '../error/app.error'

const playerRouter = Router()

/**
 * @typedef {object} ErrorResponse Returned error to user into HTTP response
 * @property {string} error error reason
 */

/**
* @typedef {object} PlayersResponse
* @property {string} status - success
* @property {string} players - array of all players
*/

/**
* @typedef {object} PlayerResponse
* @property {string} status - success
* @property {string} player - data of one player
*/

playerRouter.route('/')
/**
 * GET /player
 * @summary return an array of all players recorded
 * @return {PlayersResponse} 200 - success response
 */
  .get(errorWrapper(playerController.getAllPlayer))
playerRouter.route('/:id')
/**
 * GET /player/{:id}
 * @summary return information of one player
 * @return {PlayerResponse} 200 - success response
 * @return {ErrorResponse} 400 - no data found
 */
  .get(errorWrapper(playerController.getOnePlayer))

playerRouter.all('*', (req, res, next) => {
  next(new CustomError(404, 'Not Found'))
})

export default playerRouter
