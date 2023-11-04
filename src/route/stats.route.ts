/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import statsController from '../controller/stat.controller'
import errorWrapper from '../error/errorWrapper.error'

const statsRouter = Router()

statsRouter.route('/win')
  .get(errorWrapper(statsController.getMostWinning))
statsRouter.route('/imc')
  .get(errorWrapper(statsController.averageImc))
statsRouter.route('/hgt')
  .get(errorWrapper(statsController.averageHeight))

export default statsRouter
