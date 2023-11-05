/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import errorWrapper from '../error/errorWrapper.error'
import playerController from '../controller/player.controller'
import CustomError from '../error/app.error'

const playerRouter = Router()

playerRouter.route('/')
  .get(errorWrapper(playerController.getAllPlayer))
playerRouter.route('/:id')
  .get(errorWrapper(playerController.getOnePlayer))

playerRouter.all('*', (req, res, next) => {
  next(new CustomError(404, 'Not Found'))
})

export default playerRouter
