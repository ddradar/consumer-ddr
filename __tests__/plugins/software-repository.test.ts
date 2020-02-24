describe('plugins/software-repository.ts', () => {
  const mockSoftware = {
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
          }
        ]
      }
    ]
  }

  beforeEach(() => {
    jest.resetModules()
  })

  describe('getSoftwareList', () => {
    test('returns Software[]', async () => {
      // Arrange
      jest.mock('~/series', () => [mockSoftware])

      // Act
      const list = (
        await import('~/plugins/software-repository')
      ).getSoftwareList()

      // Assert
      expect(list).toHaveLength(1)
      expect(list[0]).toStrictEqual({
        id: mockSoftware.id,
        name: mockSoftware.name,
        region: mockSoftware.region,
        platform: mockSoftware.platform,
        launched: new Date(mockSoftware.launched)
      })
    })
  })

  describe('getSoftwareInfo', () => {
    test('returns undefined if not found', async () => {
      // Arrange
      jest.mock('~/series')

      // Act
      const info = (
        await import('~/plugins/software-repository')
      ).getSoftwareInfo('hoge')

      // Assert
      expect(info).toBe(undefined)
    })
    test('returns SoftwareInfo if found', async () => {
      // Arrange
      jest.mock('~/series', () => [mockSoftware])

      // Act
      const info = (
        await import('~/plugins/software-repository')
      ).getSoftwareInfo(mockSoftware.id)

      // Assert
      expect(info).toStrictEqual({
        id: 'supernova2-jp',
        name: 'Dance Dance Revolution SuperNOVA2',
        region: 'JP',
        launched: new Date('2017-02-01'),
        platform: 'Play Station 2',
        songs: [
          {
            id: 'paranoia-180',
            name: 'PARANOiA',
            artist: '180',
            bpm: 180,
            charts: [
              {
                songId: 'paranoia-180',
                playStyle: 'SINGLE',
                difficulty: 1,
                level: 6
              }
            ]
          }
        ]
      })
    })
  })
})
