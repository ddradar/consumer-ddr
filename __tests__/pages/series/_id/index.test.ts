import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'

import SeriesDetail from '~/pages/series/_id/index.vue'
import { Software } from '~/types/software'
import { PlayStyle, Song } from '~/types/song'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('pages/series/_id/index.vue', () => {
  let wrapper: Wrapper<Vue>
  let vm: any
  const info: Software = {
    slug: '1st-jp',
    name: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-04-10',
    difficultyNames: {
      '1': 'BASIC',
      '2': 'ANOTHER',
      '3': 'MANIAC',
      '5': 'NORMAL'
    }
  }
  const songs: Song[] = [
    {
      series: '1st-jp',
      slug: 'make-it-better',
      name: 'MAKE IT BETTER',
      artist: 'mitsu-O!',
      bpm: 118,
      charts: [
        {
          playStyle: 'SINGLE',
          difficulty: 1,
          level: 5
        },
        {
          playStyle: 'SINGLE',
          difficulty: 2,
          level: 6
        },
        {
          playStyle: 'SINGLE',
          difficulty: 3,
          level: 8
        },
        {
          playStyle: 'DOUBLE',
          difficulty: 1,
          level: 5
        },
        {
          playStyle: 'DOUBLE',
          difficulty: 2,
          level: 6
        }
      ]
    },
    {
      series: '1st-jp',
      slug: 'paranoia',
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
          playStyle: 'SINGLE',
          difficulty: 2,
          level: 7
        },
        {
          playStyle: 'SINGLE',
          difficulty: 3,
          level: 8
        },
        {
          playStyle: 'DOUBLE',
          difficulty: 1,
          level: 7
        },
        {
          playStyle: 'DOUBLE',
          difficulty: 2,
          level: 8
        }
      ]
    },
    {
      series: '1st-jp',
      slug: 'trip-machine',
      name: 'TRIP MACHINE',
      artist: 'DE-SIRE',
      bpm: 160,
      charts: [
        {
          playStyle: 'SINGLE',
          difficulty: 1,
          level: 6
        },
        {
          playStyle: 'SINGLE',
          difficulty: 2,
          level: 7
        },
        {
          playStyle: 'SINGLE',
          difficulty: 3,
          level: 8
        },
        {
          playStyle: 'DOUBLE',
          difficulty: 1,
          level: 7
        },
        {
          playStyle: 'DOUBLE',
          difficulty: 2,
          level: 8
        }
      ]
    }
  ]
  const chartRows: PlayStyle[] = ['SINGLE', 'DOUBLE']

  beforeEach(() => {
    wrapper = shallowMount(SeriesDetail, {
      localVue,
      data: () => ({ info, songs, chartRows }),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    vm = wrapper.vm
  })

  test('renders correctly', () => {
    // Arrange - Act
    const wrapper = mount(SeriesDetail, {
      localVue,
      data: () => ({ info, songs, chartRows }),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
  test('renders blank', () => {
    const wrapper = shallowMount(SeriesDetail, {
      localVue,
      data: () => ({ info: undefined }),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.html()).toBe('')
  })

  describe('head()', () => {
    test('returns info.name', () => {
      // Arrange
      const head = wrapper.vm.$options.head as any

      // Act & Assert
      expect(head.call(wrapper.vm)).toStrictEqual({ title: info.name })
    })
  })

  describe('tooltip', () => {
    test.each([0, 1, -1, 0.1, -0.1, NaN, Infinity, -Infinity])(
      '(%d) returns "Unknown" if info is undefined',
      (i) => {
        // Arrange
        wrapper.setData({ info: undefined })
        const tooltip: (i: number) => string = vm.tooltip

        // Act & Assert
        expect(tooltip(i)).toBe('Unknown')
      }
    )
    test.each([
      [1, 'BASIC'],
      [2, 'ANOTHER'],
      [3, 'MANIAC'],
      [5, 'NORMAL']
    ])('(%i) returns "%s"', (i, expected) => {
      // Arrange
      const tooltip: (i: number) => string = vm.tooltip

      // Act & Assert
      expect(tooltip(i)).toBe(expected)
    })
    test.each([4, -1, 0.1, 0.5, NaN, Infinity, -Infinity])(
      '(%d) returns "Unknown"',
      (i) => {
        // Arrange
        const tooltip: (i: number) => string = vm.tooltip

        // Act & Assert
        expect(tooltip(i)).toBe('Unknown')
      }
    )
  })
})
