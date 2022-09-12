import { describe, expect, test } from 'vitest'

import { normalizeDifficulty } from '~~/src/song'

describe('/src/song.ts', () => {
  describe('normalizeDifficulty', () => {
    test.each([
      [0, 'BEGINNER'],
      [1, 'BASIC'],
      [2, 'DIFFICULT'],
      [3, 'EXPERT'],
      [4, 'CHALLENGE'],
      [5, 'BEGINNER'],
      [6, 'BASIC'],
      [7, 'DIFFICULT'],
      [8, 'EXPERT'],
      [9, 'CHALLENGE'],
      [10, 'BEGINNER']
    ])('(%i) returns %s', (difficulty, expected) => {
      expect(normalizeDifficulty(difficulty)).toBe(expected)
    })
  })
})
