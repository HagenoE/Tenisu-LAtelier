import playerDatamapper from '../datamapper/player.datamapper'

describe('test of player.datamapper file', () => {
  test('Is an object', () => {
    expect(typeof playerDatamapper).toBe('object')
  })
  test('Have findAllplayer property', () => {
    expect(playerDatamapper).toHaveProperty('findAllPlayer')
  })
  test('Have findAOneplayer property', () => {
    expect(playerDatamapper).toHaveProperty('findOnePlayer')
  })
})
