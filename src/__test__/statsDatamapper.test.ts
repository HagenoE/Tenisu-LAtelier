import statsDatamapper from '../datamapper/stat.datamapper'

describe('Test the statsDatammapper file', () => {
  test('Is an object', () => {
    expect(typeof statsDatamapper).toBe('object')
  })
  test('Have mostWinning properties', () => {
    expect(statsDatamapper).toHaveProperty('mostWinning')
  })
  test('Have getDataForPlayer properties', () => {
    expect(statsDatamapper).toHaveProperty('getDataForPlayer')
  })
})
