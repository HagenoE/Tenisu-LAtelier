import { open } from 'node:fs/promises'
import dataJson from './data.json' assert { type: 'json' }

let playerData = 'BEGIN; \n INSERT INTO "players" \n(id, firstname, lastname, shortname, sex, country, picture, data) \n VALUES \n'
const playersJson = dataJson.players

playersJson.forEach((players, index) => {
  if (index === dataJson.players.length - 1) {
    playerData += `( '${players.id}', '${players.firstname}','${players.lastname}', '${players.shortname}','${players.sex}','${JSON.stringify(players.country)}','${players.picture}','${JSON.stringify(players.data)}');\nCOMMIT;`
    return playerData
  }
  playerData += `( '${players.id}', '${players.firstname}','${players.lastname}', '${players.shortname}','${players.sex}','${JSON.stringify(players.country)}','${players.picture}','${JSON.stringify(players.data)}'),\n`
})

const importData = await open('./src/data/player.sql', 'a+')
try {
  await importData.write(playerData)
} finally {
  await importData.close()
}
