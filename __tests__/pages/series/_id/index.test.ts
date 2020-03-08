import { Context } from '@nuxt/types'
import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils'
import Buefy from 'buefy'
import { mocked } from 'ts-jest/utils'

import SeriesDetail from '~/pages/series/_id/index.vue'
import { getSoftwareInfo, SoftwareInfo } from '~/plugins/software-repository'

const localVue = createLocalVue()
localVue.use(Buefy)
jest.mock('~/plugins/software-repository')

describe('pages/series/_id/index.vue', () => {
  let wrapper: Wrapper<Vue>
  let vm: any
  const info: SoftwareInfo = {
    id: '1st-jp',
    name: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: new Date('1999-04-10'),
    songs: [
      {
        id: 'make-it-better',
        name: 'MAKE IT BETTER',
        artist: 'mitsu-O!',
        bpm: 118,
        charts: [
          {
            songId: 'paranoia',
            playStyle: 'SINGLE',
            difficulty: 1,
            level: 5
          },
          {
            songId: 'paranoia',
            playStyle: 'SINGLE',
            difficulty: 2,
            level: 6
          },
          {
            songId: 'paranoia',
            playStyle: 'SINGLE',
            difficulty: 3,
            level: 8
          },
          {
            songId: 'paranoia',
            playStyle: 'DOUBLE',
            difficulty: 1,
            level: 5
          },
          {
            songId: 'paranoia',
            playStyle: 'DOUBLE',
            difficulty: 2,
            level: 6
          }
        ]
      },
      {
        id: 'paranoia',
        name: 'PARANOiA',
        artist: '180',
        bpm: 180,
        charts: [
          {
            songId: 'paranoia',
            playStyle: 'SINGLE',
            difficulty: 1,
            level: 6
          },
          {
            songId: 'paranoia',
            playStyle: 'SINGLE',
            difficulty: 2,
            level: 7
          },
          {
            songId: 'paranoia',
            playStyle: 'SINGLE',
            difficulty: 3,
            level: 8
          },
          {
            songId: 'paranoia',
            playStyle: 'DOUBLE',
            difficulty: 1,
            level: 7
          },
          {
            songId: 'paranoia',
            playStyle: 'DOUBLE',
            difficulty: 2,
            level: 8
          }
        ]
      },
      {
        id: 'trip-machine',
        name: 'TRIP MACHINE',
        artist: 'DE-SIRE',
        bpm: 160,
        charts: [
          {
            songId: 'trip-machine',
            playStyle: 'SINGLE',
            difficulty: 1,
            level: 6
          },
          {
            songId: 'trip-machine',
            playStyle: 'SINGLE',
            difficulty: 2,
            level: 7
          },
          {
            songId: 'trip-machine',
            playStyle: 'SINGLE',
            difficulty: 3,
            level: 8
          },
          {
            songId: 'trip-machine',
            playStyle: 'DOUBLE',
            difficulty: 1,
            level: 7
          },
          {
            songId: 'trip-machine',
            playStyle: 'DOUBLE',
            difficulty: 2,
            level: 8
          }
        ]
      }
    ],
    difficultyNames: {
      '1': 'BASIC',
      '2': 'ANOTHER',
      '3': 'MANIAC',
      '5': 'NORMAL'
    }
  }
  const chartRows = ['SINGLE', 'DOUBLE']

  beforeEach(() => {
    wrapper = shallowMount(SeriesDetail, {
      localVue,
      data: () => ({ info, chartRows })
    })
    vm = wrapper.vm
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(SeriesDetail, {
      localVue,
      data: () => ({ info, chartRows })
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  describe('asyncData()', () => {
    let asyncData: ({
      params,
      payload
    }: Pick<Context, 'params' | 'payload'>) => any
    beforeEach(() => (asyncData = vm.$options.asyncData))
    afterEach(() => mocked(getSoftwareInfo).mockReset())

    test('returns default value', async () => {
      // Arrange
      mocked(getSoftwareInfo).mockReturnValue(undefined)

      // Act
      const data = await asyncData({
        params: { id: 'foo' },
        payload: undefined
      })

      expect(data).toStrictEqual({ info: undefined, chartRows })
      expect(mocked(getSoftwareInfo).mock.calls).toHaveLength(1)
      expect(mocked(getSoftwareInfo).mock.calls[0][0]).toBe('foo')
    })
    test('returns payload value', async () => {
      // Arrange
      mocked(getSoftwareInfo).mockReturnValue(undefined)

      // Act
      const data = await asyncData({ params: {}, payload: info })

      // Assert
      expect(mocked(getSoftwareInfo).mock.calls).toHaveLength(0)
      expect(data).toStrictEqual({ info, chartRows })
    })
    test('returns getSoftwareInfo(params.id) value', async () => {
      // Arrange
      mocked(getSoftwareInfo).mockReturnValue(info)

      // Act
      const data = await asyncData({
        params: { id: '1st-jp' },
        payload: undefined
      })

      // Assert
      expect(mocked(getSoftwareInfo).mock.calls).toHaveLength(1)
      expect(mocked(getSoftwareInfo).mock.calls[0][0]).toBe('1st-jp')
      expect(data).toStrictEqual({ info, chartRows })
    })
  })
  describe('tooltip()', () => {
    test.each([0, 1, -1, 0.1, -0.1, NaN, Infinity, -Infinity])(
      'returns "Unknown" if info is undefined',
      (i) => {
        // Arrange
        wrapper = shallowMount(SeriesDetail, {
          localVue,
          data: () => ({ info: undefined, chartRows })
        })
        const tooltip: (i: number) => string = (wrapper.vm as any).tooltip

        // Act & Assert
        expect(tooltip(i)).toBe('Unknown')
      }
    )
    test.each([
      ['BASIC', 1],
      ['ANOTHER', 2],
      ['MANIAC', 3],
      ['NORMAL', 5]
    ])('returns "%s" if difficulty is %i', (expected, i) => {
      // Arrange
      const tooltip: (i: number) => string = (wrapper.vm as any).tooltip

      // Act & Assert
      expect(tooltip(i)).toBe(expected)
    })
    test.each([4, -1, 0.1, 0.5, NaN, Infinity, -Infinity])(
      'returns "Unknown" if difficulty is %i',
      (i) => {
        // Arrange
        const tooltip: (i: number) => string = (wrapper.vm as any).tooltip

        // Act & Assert
        expect(tooltip(i)).toBe('Unknown')
      }
    )
  })
})
