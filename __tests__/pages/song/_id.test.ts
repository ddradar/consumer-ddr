import { Context } from '@nuxt/types'
import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'
import { mocked } from 'ts-jest/utils'

import SongDetail from '~/pages/song/_id.vue'
import { getSongInfo } from '~/plugins/song-repository'

type SongInfo = ReturnType<typeof getSongInfo>
const localVue = createLocalVue()
localVue.use(Buefy)
jest.mock('~/plugins/song-repository')

describe('pages/series/_id/index.vue', () => {
  let wrapper: Wrapper<Vue>
  let vm: any
  const info: SongInfo = {
    id: 'boys-smiledk',
    name: 'BOYS',
    artist: 'smile. dk',
    bpm: 138,
    softwareIds: ['1st-jp', '2nd-remix-jp'],
    charts: [
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        level: [3]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        level: [4]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 3,
        level: [7]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 1,
        level: [4]
      },
      {
        playStyle: 'SINGLE',
        difficulty: 2,
        level: [5]
      }
    ]
  }

  beforeEach(() => {
    wrapper = shallowMount(SongDetail, {
      localVue,
      data: () => ({ info }),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    vm = wrapper.vm
  })

  test('renders correctly', () => {
    const wrapper = mount(SongDetail, {
      localVue,
      data: () => ({ info }),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  test('renders blank', () => {
    const wrapper = shallowMount(SongDetail, {
      localVue,
      data: () => ({ info: undefined })
    })
    expect(wrapper.html()).toBe('')
  })

  describe('asyncData()', () => {
    let asyncData: ({
      params,
      payload
    }: Pick<Context, 'params' | 'payload'>) => any
    beforeEach(() => (asyncData = vm.$options.asyncData))
    afterEach(() => mocked(getSongInfo).mockReset())

    test('returns default value', async () => {
      // Arrange
      mocked(getSongInfo).mockReturnValue(undefined)

      // Act
      const data = await asyncData({
        params: { id: 'foo' },
        payload: undefined
      })

      expect(data).toStrictEqual({ info: undefined })
      expect(mocked(getSongInfo).mock.calls).toHaveLength(1)
      expect(mocked(getSongInfo).mock.calls[0][0]).toBe('foo')
    })
    test('returns payload value', async () => {
      // Arrange
      mocked(getSongInfo).mockReturnValue(undefined)

      // Act
      const data = await asyncData({ params: {}, payload: info })

      // Assert
      expect(mocked(getSongInfo).mock.calls).toHaveLength(0)
      expect(data).toStrictEqual({ info })
    })
    test('returns getSoftwareInfo(params.id) value', async () => {
      // Arrange
      mocked(getSongInfo).mockReturnValue(info)

      // Act
      const data = await asyncData({
        params: { id: 'boys-smiledk' },
        payload: undefined
      })

      // Assert
      expect(mocked(getSongInfo).mock.calls).toHaveLength(1)
      expect(mocked(getSongInfo).mock.calls[0][0]).toBe('boys-smiledk')
      expect(data).toStrictEqual({ info })
    })
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
