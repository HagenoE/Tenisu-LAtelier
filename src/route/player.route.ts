/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import errorWrapper from '../error/errorWrapper.error'
import playerController from '../controller/player.controller'

const playerRouter = Router()

playerRouter.route('/')
  .get(errorWrapper(playerController.getAllPlayer))
playerRouter.route('/:id')
  .get(errorWrapper(playerController.getOnePlayer))

export default playerRouter
