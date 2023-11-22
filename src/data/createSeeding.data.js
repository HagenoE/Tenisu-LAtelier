import { open } from 'node:fs/promises'
import dataJson from './data.json' assert { type: 'json' }

let playerData2 = 'BEGIN; \n INSERT INTO "players_one" \n("id", "firstname", "lastname", "shortname", "sex", "country", "picture", "data") \n VALUES \n'
let playerTable = 'BEGIN; \n INSERT INTO "players" \n("id", "firstname", "lastname", "shortname", "sex", "picture") \n VALUES \n'
let playerCountry = '\nINSERT INTO "country" \n("picture", "code", "players_id") \n VALUES \n'
let playerData = '\n INSERT INTO "data" \n("rank", "points", "weight", "height", "age", "last", "players_id") \n VALUES \n'
const playersJson = dataJson.players

playersJson.forEach((players, index) => {
  const currentCountry = players.country
  const currentData = players.data

  if (index === dataJson.players.length - 1) {
    playerData2 += `( '${players.id}', '${players.firstname}','${players.lastname}', '${players.shortname}','${players.sex}','${JSON.stringify(players.country)}','${players.picture}','${JSON.stringify(players.data)}');\nCOMMIT;`
    playerTable += `( '${players.id}', '${players.firstname}','${players.lastname}', '${players.shortname}','${players.sex}','${players.picture}');\n`
    playerCountry += `('${currentCountry.picture}', '${currentCountry.code}','${players.id}');\n`
    playerData += `('${currentData.rank}', '${currentData.points}', '${currentData.weight}', '${currentData.height}', '${currentData.age}', ARRAY[${currentData.last}], '${players.id}');\nCOMMIT;`

    return playerData2
  }
  playerData2 += `( '${players.id}', '${players.firstname}','${players.lastname}', '${players.shortname}','${players.sex}','${JSON.stringify(players.country)}','${players.picture}','${JSON.stringify(players.data)}'),\n`
  playerTable += `( '${players.id}', '${players.firstname}','${players.lastname}', '${players.shortname}','${players.sex}','${players.picture}'),\n`
  playerCountry += `('${currentCountry.picture}', '${currentCountry.code}', '${players.id}'),\n`
  playerData += `('${currentData.rank}', '${currentData.points}', '${currentData.weight}', '${currentData.height}', '${currentData.age}', ARRAY[${currentData.last}], '${players.id}'),\n`
})

const importData = await open('./src/data/player.sql', 'a+')
try {
  await importData.write(playerTable)
  await importData.write(playerCountry)
  await importData.write(playerData)
} finally {
  await importData.close()
}

const importDataOneTable = await open('./src/data/playerOneTable.sql', 'a+')
try {
  await importDataOneTable.write(playerData2)
} finally {
  await importDataOneTable.close()
}
