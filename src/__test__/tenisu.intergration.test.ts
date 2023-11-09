import request from 'supertest'
import app from '../server'

describe('Test player route', () => {
  it('Test /player/ route', async () => {
    const res = await request(app).get('/player')
    test('Response must be find', () => {
      expect(res.header['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)
    })

    test('Response body', async () => {
      const players = res.body.player
      expect(players).toBe('array')
      describe.each(players)('Check all datas', () => {
        expect(players).toHaveProperty('id')
        expect(players).toHaveProperty('lastname')
        expect(players).toHaveProperty('firstname')
        expect(players).toHaveProperty('shortname')
        expect(players).toHaveProperty('sex')
        expect(players).toHaveProperty('picture')
        expect(players).toHaveProperty('rate')
        expect(typeof players.id).toBe('string')
        expect(typeof players.lastname).toBe('string')
        expect(typeof players.firstname).toBe('string')
        expect(typeof players.shortname).toBe('string')
        expect(typeof players.sex).toBe('string')
        expect(typeof players.picture).toBe('string')
        expect(typeof players.rate).toBe('number')
      })
    })
  })
  it('Test route /player/:id', async () => {
    const id = 152
    const res = await request(app).get(`/player/${id}`)
    const player = res.body.player
    test('Response must be find', () => {
      expect(res.header['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)
    })
    test('Response body for one player', () => {
      expect(player).toBe('array')
      expect(player.length).toBeGreaterThan(0)
      describe.each(player)('Check all datas', () => {
        expect(player).toHaveProperty('id')
        expect(player).toHaveProperty('lastname')
        expect(player).toHaveProperty('firstname')
        expect(player).toHaveProperty('shortname')
        expect(player).toHaveProperty('sex')
        expect(player).toHaveProperty('picture')
        expect(player).toHaveProperty('rate')
        expect(player.id).toBe('string')
        expect(typeof player.lastname).toBe('string')
        expect(typeof player.firstname).toBe('string')
        expect(typeof player.shortname).toBe('string')
        expect(typeof player.sex).toBe('string')
        expect(typeof player.picture).toBe('string')
        expect(typeof player.rate).toBe('number')
      })
    })
  })
  it('Test route /player/:id with wrong id', async () => {
    const id = 10
    const res = await request(app).get(`/player/${id}`)

    test('Error must be find', () => {
      expect(res.header['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(400)
    })
  })
})

describe('Test stats route', () => {
  it('Test IMC route', async () => {
    const res = await request(app).get('/stats/imc')
    test('Response must be find', () => {
      expect(res.header['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)
    })
  })
  it('response body for imc', async () => {
    const res = await request(app).get('/stats/imc')
    test('Response body structure', () => {
      expect(typeof res.body).toBe('object')
      expect(res.body).toHaveProperty('averageImc')
    })
  })
  it('Test winning route', async () => {
    const res = await request(app).get('/stats/win')
    test('Response must be find', () => {
      expect(res.header['content-type']).toMatch(/json/)
      expect(res.statusCode).toBe(200)
    })
  })
  it('response body for win', async () => {
    const res = await request(app).get('/stats/win')
    test('Response body structure', () => {
      expect(typeof res.body).toBe('object')
      expect(res.body).toHaveProperty('winner')
    })
    test('Winning object', () => {
      const win = res.body.winner

      expect(typeof win).toBe('array')
      expect(win.length).toBeGreaterThan(0)
      describe.each(win)('Check all datas', () => {
        expect(win).toHaveProperty('code')
        expect(typeof win.code).toBe('string')
        expect(win).toHaveProperty('total')
        expect(typeof Number(win.total)).toBe('number')
      })
    })
    it('Test mediane height route', async () => {
      const res = await request(app).get('/stats/hgt')
      test('Response must be find', () => {
        expect(res.header['content-type']).toMatch(/json/)
        expect(res.statusCode).toBe(200)
      })
    })
    it('response body for imc', async () => {
      const res = await request(app).get('/stats/hgt')
      test('Response body structure', () => {
        expect(typeof res.body).toBe('object')
        expect(res.body).toHaveProperty('medianeHeight')
      })
    })
  })
})
