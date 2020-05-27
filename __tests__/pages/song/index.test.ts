import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'
import { mocked } from 'ts-jest/utils'
import { MetaInfo } from 'vue-meta'

import SongList from '~/pages/song/index.vue'
import { getSoftwareList } from '~/plugins/software-repository'
import { getSongList } from '~/plugins/song-repository'

const localVue = createLocalVue()
localVue.use(Buefy)
jest.mock('~/plugins/software-repository')
jest.mock('~/plugins/song-repository')
mocked(getSoftwareList).mockReturnValue([
  {
    id: '1st-jp',
    name: 'Dance Dance Revolution',
    region: 'JP',
    platform: 'Play Station',
    launched: new Date('1999-04-10')
  },
  {
    id: '2nd-remix-jp',
    name: 'Dance Dance Revolution 2nd ReMIX',
    platform: 'Play Station',
    region: 'JP',
    launched: new Date('1999-08-26')
  }
])
mocked(getSongList).mockReturnValue([
  {
    id: 'am-3p',
    name: 'AM-3P',
    artist: 'KTz',
    bpm: 130,
    softwareIds: ['2nd-remix-jp'],
    charts: [
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        level: [5]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        level: [6]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 3,
        level: [8]
      },
      {
        playStyle: 'DOUBLE',
        difficulty: 1,
        level: [5]
      },
      {
        playStyle: 'DOUBLE',
        difficulty: 2,
        level: [6]
      }
    ]
  },
  {
    id: 'paranoia',
    name: 'PARANOiA',
    artist: '180',
    bpm: 180,
    softwareIds: ['1st-jp', '2nd-remix-jp'],
    charts: [
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        level: [6]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        level: [7]
      }
    ]
  },
  {
    id: 'paranoia',
    name: 'PARANOiA',
    artist: '180',
    bpm: 180,
    softwareIds: ['1st-jp', '2nd-remix-jp'],
    charts: [
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        level: [6]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        level: [7]
      }
    ]
  }
])

describe('pages/song/index.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(SongList, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('renders correctly', () => {
    const wrapper = mount(SongList, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  describe('head', () => {
    test('returns "Song List"', () => {
      // Arrange
      const head = wrapper.vm.$data.head as MetaInfo

      // Act & Assert
      expect(head).toStrictEqual({ title: 'Song List' })
    })
  })
})
