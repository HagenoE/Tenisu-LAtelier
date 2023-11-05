/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import statsController from '../controller/stat.controller'
import errorWrapper from '../error/errorWrapper.error'
import CustomError from '../error/app.error'

const statsRouter = Router()

statsRouter.route('/win')
  .get(errorWrapper(statsController.getMostWinning))
statsRouter.route('/imc')
  .get(errorWrapper(statsController.averageImc))
statsRouter.route('/hgt')
  .get(errorWrapper(statsController.averageHeight))

statsRouter.all('*', (req, res, next) => {
  next(new CustomError(404, 'Not Found'))
})

export default statsRouter
