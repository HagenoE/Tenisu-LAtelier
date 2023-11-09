import { type Request, type Response, type NextFunction } from 'express'
const errorWrapper = (callback: any) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await callback(req, res, next)
  } catch (error) {
    next(error)
  }
}

export default errorWrapper
