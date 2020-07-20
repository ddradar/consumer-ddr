import { groupBy } from '~/types/util'

describe('/types/util.ts', () => {
  describe('groupBy', () => {
    test('returns grouped Tuple', () => {
      // Arrange
      const arr = [
        { group: 'foo', content: 'foo-1' },
        { group: 'bar', content: 'bar-1' },
        { group: 'bar', content: 'bar-3' },
        { group: 'foo', content: 'foo-2' },
        { group: 'bar', content: 'bar-2' }
      ]

      // Act
      const result = groupBy(arr, (e) => e.group)

      // Assert
      expect(result).toStrictEqual([
        ['foo', [arr[0], arr[3]]],
        ['bar', [arr[1], arr[2], arr[4]]]
      ])
    })
  })
})
