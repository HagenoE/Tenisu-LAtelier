import { z } from 'zod'

export const PlayerSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  shortname: z.string(),
  sex: z.string(),
  country: z.object({
    picture: z.string(),
    code: z.string()
  }),
  picture: z.string(),
  data: z.object({
    rank: z.number(),
    points: z.number(),
    weight: z.number(),
    height: z.number(),
    age: z.number(),
    last: z.array(z.number())
  })
})

export const ConnexionSchema = z.object({
  user: z.string().optional(),
  host: z.string().optional(),
  database: z.string().optional(),
  password: z.string().optional(),
  port: z.number().optional()
})

/**
 * A typeguarded version of `instanceof Error` for NodeJS.
 * @author Joseph JDBar Barron
 * @link https://dev.to/jdbar
 */
export function instanceOfNodeError<T extends new (...args: any) => Error> (
  value: Error,
  errorType: T
): value is InstanceType<T> & NodeJS.ErrnoException {
  return value instanceof errorType
}

export interface CustomErrorContent {
  message: string
  context?: Record<string, any>
}
