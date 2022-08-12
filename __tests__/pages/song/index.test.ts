import { RouterLinkStub } from '@vue/test-utils'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SongList from '~/pages/song/index.vue'

import { mountAsync, plugins } from '../../test-utils'

describe('pages/song/index.vue', () => {
  const song = { slug: 'paranoia', name: 'PARANOiA', artist: '180', bpm: 180 }
  const series = [{ slug: '1st-jp' }, { slug: '2nd' }]
  const songs = [
    { slug: 'am-3p', series: '2nd', name: 'AM-3P', artist: 'KTz', bpm: 130 },
    ...series.map(({ slug }) => ({ ...song, series: slug }))
  ]
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub } }

  beforeAll(() => {
    vi.mocked(useAsyncData).mockResolvedValue({ data: ref(series) } as any)
  })

  describe('snapshot test', () => {
    test('renders loading state', async () => {
      // Arrange
      vi.mocked(useLazyAsyncData).mockResolvedValue({
        data: ref([]),
        pending: ref(true)
      } as any)

      // Act
      const wrapper = await mountAsync(SongList, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })

    test('renders song info', async () => {
      // Arrange
      vi.mocked(useLazyAsyncData).mockResolvedValue({
        data: ref(songs),
        pending: ref(false)
      } as any)

      // Act
      const wrapper = await mountAsync(SongList, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
