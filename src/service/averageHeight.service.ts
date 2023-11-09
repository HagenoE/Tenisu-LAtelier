import { type z } from 'zod'
import { type imcSchema } from '../@types/d'

export default (playerArray: Array<z.infer<typeof imcSchema>>): number => {
  const allHeight = playerArray.map((element) => element.height).sort((a, b) => a - b)

  const mid = Math.floor(allHeight.length / 2)
  const result = allHeight[mid]

  return result
}
