import softwareList from '~/series'

describe('plugins/song-repository.ts', () => {
  const mockSoftware: typeof softwareList = [
    {
      id: '1st-jp',
      name: 'Dance Dance Revolution',
      region: 'JP',
      launched: '1999-04-10',
      platform: 'Play Station',
      songs: [
        {
          id: 'have-you-never-been-mellow',
          name: 'HAVE YOU NEVER BEEN MELLOW',
          artist: 'THE OLIVIA PROJECT',
          bpm: 126,
          charts: [
            {
              playStyle: 'SINGLE',
              difficulty: 1,
              level: 1
            }
          ]
        },
        {
          id: 'paranoia-180',
          name: 'PARANOiA',
          artist: '180',
          bpm: 180,
          charts: [
            {
              playStyle: 'SINGLE',
              difficulty: 1,
              level: 7
            },
            {
              playStyle: 'SINGLE',
              difficulty: 2,
              level: 7
            }
          ]
        }
      ],
      difficultyNames: {}
    },
    {
      id: 'supernova2-jp',
      name: 'Dance Dance Revolution SuperNOVA2',
      region: 'JP',
      launched: '2017-02-01',
      platform: 'Play Station 2',
      songs: [
        {
          id: 'paranoia-180',
          name: 'PARANOiA',
          artist: '180',
          bpm: 180,
          charts: [
            {
              playStyle: 'SINGLE',
              difficulty: 1,
              level: 6
            },
            {
              playStyle: 'DOUBLE',
              difficulty: 1,
              level: 7
            }
          ]
        }
      ],
      difficultyNames: {}
    }
  ]

  beforeEach(() => {
    jest.resetModules()
    jest.mock('~/series', () => mockSoftware)
  })

  describe('getSongList()', () => {
    test('returns SongInfo[]', async () => {
      // Act
      const list = (await import('~/plugins/song-repository')).getSongList()

      // Assert
      expect(list).toHaveLength(2)
    })
  })
  describe('getSongInfo()', () => {
    test('returns undefined if not found', async () => {
      // Act
      const info = (await import('~/plugins/song-repository')).getSongInfo(
        'foo'
      )

      // Assert
      expect(info).toBe(undefined)
    })
    test('returns SongInfo if found', async () => {
      // Act
      const info = (await import('~/plugins/song-repository')).getSongInfo(
        'paranoia-180'
      )

      // Assert
      expect(info).toStrictEqual({
        id: 'paranoia-180',
        name: 'PARANOiA',
        artist: '180',
        bpm: 180,
        softwareIds: ['1st-jp', 'supernova2-jp'],
        charts: [
          {
            songId: 'paranoia-180',
            playStyle: 'SINGLE',
            difficulty: 1,
            level: [7, 6]
          },
          {
            songId: 'paranoia-180',
            playStyle: 'SINGLE',
            difficulty: 2,
            level: [7]
          },
          {
            songId: 'paranoia-180',
            playStyle: 'DOUBLE',
            difficulty: 1,
            level: [7]
          }
        ]
      })
    })
  })
})
