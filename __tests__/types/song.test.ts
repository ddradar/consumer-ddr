import { normalizeDifficulty } from '~/types/song'

describe('/types/song.ts', () => {
  describe('normalizeDifficulty', () => {
    test.each([
      ['foo', 'CHALLENGE'],
      ['Unknown', 'CHALLENGE'],
      ['', 'CHALLENGE'],
      ['BASIC', 'BASIC'],
      ['NORMAL', 'BASIC'],
      ['LIGHT', 'BASIC'],
      ['ANOTHER', 'DIFFICULT'],
      ['TRICK', 'DIFFICULT'],
      ['DIFFICULT', 'DIFFICULT'],
      ['MANIAC', 'EXPERT'],
      ['SSR', 'EXPERT'],
      ['EXPERT', 'EXPERT'],
      ['BEGINNER', 'BEGINNER']
    ])('("%s") returns %s', (name, expected) => {
      expect(normalizeDifficulty(name)).toBe(expected)
    })
  })
})
