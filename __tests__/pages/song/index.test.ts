import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'
import { MetaInfo } from 'vue-meta'

import SongList from '~/pages/song/index.vue'
import { Song } from '~/types/song'

type SongListData = Omit<Song, 'series' | 'charts'> & {
  seriesList: string[]
}

const localVue = createLocalVue()
localVue.use(Buefy)

describe('pages/song/index.vue', () => {
  let wrapper: Wrapper<SongList>
  const songList: SongListData[] = [
    {
      slug: 'am-3p',
      name: 'AM-3P',
      artist: 'KTz',
      bpm: 130,
      seriesList: ['2nd-remix-jp']
    },
    {
      slug: 'paranoia',
      name: 'PARANOiA',
      artist: '180',
      bpm: 180,
      seriesList: ['1st-jp', '2nd-remix-jp']
    }
  ]
  const seriesList = ['1st-jp', '2nd-remix-jp']

  beforeEach(() => {
    wrapper = shallowMount(SongList, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      data: () => ({ songList, seriesList })
    })
  })

  test('renders correctly', () => {
    // Arrange - Act
    const wrapper = mount(SongList, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      data: () => ({ songList, seriesList })
    })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('head()', () => {
    test('returns "Song List"', () => {
      // Arrange
      const head = wrapper.vm.$data.head as MetaInfo

      // Act & Assert
      expect(head).toStrictEqual({ title: 'Song List' })
    })
  })
})
