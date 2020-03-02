import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils'
import Buefy from 'buefy'

import SeriesDetail from '~/pages/series/_id/index.vue'
import { SoftwareInfo } from '~/plugins/software-repository'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('pages/series/_id/index.vue', () => {
  let wrapper: Wrapper<Vue>
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
})
