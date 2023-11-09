import type z from 'Zod'
import { type imcSchema } from '../@types/d'

export default (playerArray: Array<z.infer<typeof imcSchema>>): number => {
  const playerImc = playerArray.map((element) => {
    const imc = (element.weight / 1000) / ((element.height / 100) * (element.height / 100))
    return imc
  })

  const sumIMC = playerImc.reduce((acc, cur) => acc + cur, 0)
  const averageImc = sumIMC / playerImc.length

  return averageImc
}
