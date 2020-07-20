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
import { Chart, PlayStyle, Song } from '~/types/song'

type ChartInfo = Pick<Chart, 'level' | 'difficulty'> & {
  color: string
  difficultyName: string
}

type SongListData = Omit<Song, 'series' | 'charts'> & {
  charts: [PlayStyle, ChartInfo[]][]
}

const localVue = createLocalVue()
localVue.use(Buefy)

describe('pages/series/_id/index.vue', () => {
  let wrapper: Wrapper<Vue>
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
      charts: [
        [
          'SINGLE',
          [
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
          ]
        ],
        [
          'DOUBLE',
          [
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
        ]
      ]
    },
    {
      slug: 'paranoia',
      name: 'PARANOiA',
      artist: '180',
      bpm: 180,
      charts: [
        [
          'SINGLE',
          [
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
          ]
        ],
        [
          'DOUBLE',
          [
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
        ]
      ]
    },
    {
      slug: 'trip-machine',
      name: 'TRIP MACHINE',
      artist: 'DE-SIRE',
      bpm: 160,
      charts: [
        [
          'SINGLE',
          [
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
          ]
        ],
        [
          'DOUBLE',
          [
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
        ]
      ]
    }
  ]

  beforeEach(() => {
    wrapper = shallowMount(SeriesDetail, {
      localVue,
      data: () => ({ info, songs }),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('renders correctly', () => {
    // Arrange - Act
    const wrapper = mount(SeriesDetail, {
      localVue,
      data: () => ({ info, songs }),
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
})
