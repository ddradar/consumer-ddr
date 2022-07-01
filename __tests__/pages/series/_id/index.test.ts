import { mount, RouterLinkStub, shallowMount, Wrapper } from '@vue/test-utils'

import { createVue } from '~/__tests__/utils'
import SeriesDetail from '~/pages/series/_id/index.vue'
import type { Software } from '~/types/software'
import type { Chart, PlayStyle, Song } from '~/types/song'

type ChartInfo = Pick<Chart, 'level' | 'difficulty'> & {
  color: string
  difficultyName: string
}

type SongListData = Omit<Song, 'series' | 'charts'> & {
  charts: Partial<Record<PlayStyle, ChartInfo[]>>
}

const localVue = createVue()

describe('pages/series/_id/index.vue', () => {
  let wrapper: Wrapper<SeriesDetail>
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
  const songs: SongListData[] = [
    {
      slug: 'make-it-better',
      name: 'MAKE IT BETTER',
      artist: 'mitsu-O!',
      bpm: 118,
      charts: {
        SINGLE: [
          {
            difficulty: 1,
            level: 5,
            color: 'is-basic',
            difficultyName: 'BASIC'
          },
          {
            difficulty: 2,
            level: 6,
            color: 'is-difficult',
            difficultyName: 'ANOTHER'
          },
          {
            difficulty: 3,
            level: 8,
            color: 'is-expert',
            difficultyName: 'MANIAC'
          }
        ],
        DOUBLE: [
          {
            difficulty: 1,
            level: 5,
            color: 'is-basic',
            difficultyName: 'BASIC'
          },
          {
            difficulty: 2,
            level: 6,
            color: 'is-difficult',
            difficultyName: 'ANOTHER'
          }
        ]
      }
    },
    {
      slug: 'paranoia',
      name: 'PARANOiA',
      artist: '180',
      bpm: 180,
      charts: {
        SINGLE: [
          {
            difficulty: 1,
            level: 6,
            color: 'is-basic',
            difficultyName: 'BASIC'
          },
          {
            difficulty: 2,
            level: 7,
            color: 'is-difficult',
            difficultyName: 'ANOTHER'
          },
          {
            difficulty: 3,
            level: 8,
            color: 'is-expert',
            difficultyName: 'MANIAC'
          }
        ],
        DOUBLE: [
          {
            difficulty: 1,
            level: 7,
            color: 'is-basic',
            difficultyName: 'BASIC'
          },
          {
            difficulty: 2,
            level: 8,
            color: 'is-difficult',
            difficultyName: 'ANOTHER'
          }
        ]
      }
    },
    {
      slug: 'trip-machine',
      name: 'TRIP MACHINE',
      artist: 'DE-SIRE',
      bpm: 160,
      charts: {
        SINGLE: [
          {
            difficulty: 1,
            level: 6,
            color: 'is-basic',
            difficultyName: 'BASIC'
          },
          {
            difficulty: 2,
            level: 7,
            color: 'is-difficult',
            difficultyName: 'ANOTHER'
          },
          {
            difficulty: 3,
            level: 8,
            color: 'is-expert',
            difficultyName: 'MANIAC'
          }
        ],
        DOUBLE: [
          {
            difficulty: 1,
            level: 7,
            color: 'is-basic',
            difficultyName: 'BASIC'
          },
          {
            difficulty: 2,
            level: 8,
            color: 'is-difficult',
            difficultyName: 'ANOTHER'
          }
        ]
      }
    }
  ]
  const playStyles: PlayStyle[] = ['SINGLE', 'DOUBLE']
  const data = () => ({ info, songs, playStyles })
  const stubs = { NuxtLink: RouterLinkStub }

  beforeEach(() => {
    wrapper = shallowMount(SeriesDetail, { localVue, data, stubs })
  })

  test('renders correctly', async () => {
    // Arrange - Act
    const wrapper = mount(SeriesDetail, { localVue, data, stubs })
    await wrapper.vm.$nextTick()

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
  test('renders blank', () => {
    const wrapper = shallowMount(SeriesDetail, { localVue, stubs })
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
})
