import { mount, RouterLinkStub, shallowMount, Wrapper } from '@vue/test-utils'

import { createVue } from '~/__tests__/utils'
import SongDetail from '~/pages/song/_id.vue'
import { Chart, Song } from '~/types/song'

type ComplexChart = Omit<Chart, 'level'> & {
  levels: { [key in string]: number | '10+' | '?' }
}

type SongInfo = Omit<Song, 'series' | 'charts'> & {
  charts: ComplexChart[]
  seriesList: string[]
}

const localVue = createVue()

describe('pages/song/_id.vue', () => {
  let wrapper: Wrapper<SongDetail>
  const info: SongInfo = {
    slug: 'boys-smiledk',
    name: 'BOYS',
    artist: 'smile. dk',
    bpm: 138,
    seriesList: ['1st-jp', '2nd-remix-jp'],
    charts: [
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        levels: { '1st-jp': 3, '2nd-remix-jp': 3 }
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        levels: { '1st-jp': 4, '2nd-remix-jp': 4 }
      },
      {
        playStyle: 'SINGLE',
        difficulty: 3,
        levels: { '1st-jp': 7, '2nd-remix-jp': 7 }
      },
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        levels: { '1st-jp': 4, '2nd-remix-jp': 4 }
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        levels: { '1st-jp': 5, '2nd-remix-jp': 5 }
      }
    ]
  }
  const stubs = { NuxtLink: RouterLinkStub }
  const data = () => ({ info })

  beforeEach(() => {
    wrapper = shallowMount(SongDetail, { localVue, data, stubs })
  })

  test('renders correctly', async () => {
    const wrapper = mount(SongDetail, { localVue, data, stubs })
    await wrapper.vm.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })
  test('renders blank', () => {
    const wrapper = shallowMount(SongDetail, { localVue })
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
