import { RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import paranoiaFirst from '~~/content/1st-jp/paranoia.json'
import am3p from '~~/content/2nd/am-3p.json'
import paranoiaSecond from '~~/content/2nd/paranoia.json'
import SongList from '~~/pages/songs/index.vue'

import { mountAsync, plugins } from '../../test-utils'

const rawSongData = [am3p, paranoiaFirst, paranoiaSecond].map((d) => ({
  slug: d.slug,
  series: d.series,
  name: d.name,
  artist: d.artist,
  bpm: d.bpm
}))

describe('pages/songs/index.vue', () => {
  const series = [{ slug: '1st-jp' }, { slug: '2nd' }]
  const songs = [
    {
      slug: am3p.slug,
      name: am3p.name,
      artist: am3p.artist,
      bpm: am3p.bpm,
      seriesList: [am3p.series]
    },
    {
      slug: paranoiaFirst.slug,
      name: paranoiaFirst.name,
      artist: paranoiaFirst.artist,
      bpm: paranoiaFirst.bpm,
      seriesList: [paranoiaFirst.series, paranoiaSecond.series]
    }
  ]
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub } }

  describe('snapshot test', () => {
    test('renders loading state', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockImplementation(
        (path) =>
          Promise.resolve(
            path.endsWith('songs')
              ? { data: ref([]), pending: ref(true) }
              : { data: ref(series) }
          ) as any
      )

      // Act
      const wrapper = await mountAsync(SongList, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })

    test('renders song info', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockImplementation(
        (path) =>
          Promise.resolve(
            path.endsWith('songs')
              ? { data: ref(songs), pending: ref(false) }
              : { data: ref(series) }
          ) as any
      )

      // Act
      const wrapper = await mountAsync(SongList, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('useAsyncData()', () => {
    test('calls with transform option', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockReset()
      vi.mocked(useAsyncData).mockImplementation(
        (path) =>
          Promise.resolve(
            path.endsWith('songs')
              ? { data: ref(songs), pending: ref(false) }
              : { data: ref(series) }
          ) as any
      )

      // Act
      await mountAsync(SongList, { global })
      const transform = vi.mocked(useAsyncData).mock.calls[1][2]?.transform!

      // Assert
      expect(transform(rawSongData)).toStrictEqual(songs)
    })
  })
})
