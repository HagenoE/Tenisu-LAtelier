import { type Request, type Response, type NextFunction } from 'express'
import CustomError from './app.error'

function errorHandler (err: Error, req: Request, res: Response, next: NextFunction): any {
  if (err instanceof CustomError) {
    const status = err.statusCode ?? 500

    return res.status(status).json({ error: err.message })
  };

  return res.status(500).json({ error: 'Something get wrong' })
}
export default errorHandler
