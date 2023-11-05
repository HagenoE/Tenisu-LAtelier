import express from 'express'
import multer from 'multer'
import hpp from 'hpp'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
import helmet from 'helmet'

import playerRouter from './route/player.route'
import statsRouter from './route/stats.route'
import globalErrorHandler from './error/errorHandler.error'
import doc from './doc/swagger.doc'
import CustomError from './error/app.error'

const server = express()

const multiparser = multer()

// secure configuration
server.use(hpp())
server.use(helmet())
server.use(cors({
  origin: '*',
  credentials: true
}))

const limiter = rateLimit({
  windowMs: 1000 * 60 * 30, // The duration when the user can make requests within the window
  max: 60, // Limit of requests per window within the defined limit
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false // Disable the `X-RateLimit-*` headers

})

server.use(limiter)

// parsing configuration
server.use(express.urlencoded({ extended: true }))
server.use(multiparser.none())
server.use(express.json())

server.use('/player', playerRouter)
server.use('/stats', statsRouter)

server.all('*', (req, res, next) => {
  next(new CustomError(404, 'Not Found'))
})

server.use(globalErrorHandler)
doc(server)

export default server
