/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import errorWrapper from '../error/errorWrapper.error'
import playerOneController from '../controller/playerOne.controller'
import CustomError from '../error/app.error'

const playerOneRouter = Router()

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

playerOneRouter.route('/')
/**
 * GET /player
 * @summary return an array of all players recorded
 * @return {PlayersResponse} 200 - success response
 */
  .get(errorWrapper(playerOneController.getAllPlayer))
playerOneRouter.route('/:id')
/**
 * GET /player/{:id}
 * @summary return information of one player
 * @return {PlayerResponse} 200 - success response
 * @return {ErrorResponse} 400 - no data found
 */
  .get(errorWrapper(playerOneController.getOnePlayer))

playerOneRouter.all('*', (req, res, next) => {
  next(new CustomError(404, 'Not Found'))
})

export default playerOneRouter
