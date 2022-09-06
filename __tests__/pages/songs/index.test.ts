import { RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSoftwareList from '~~/composables/useSoftwareList'
import paranoiaFirst from '~~/content/1st-jp/paranoia.json'
import am3p from '~~/content/2nd/am-3p.json'
import paranoiaSecond from '~~/content/2nd/paranoia.json'
import SongList from '~~/pages/songs/index.vue'

import { mockSoftwareList, mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSoftwareList')

const rawSongData = [am3p, paranoiaFirst, paranoiaSecond].map((d) => ({
  slug: d.slug,
  series: d.series,
  name: d.name,
  artist: d.artist,
  bpm: d.bpm
}))

describe('pages/songs/index.vue', () => {
  const songs = [
    {
      slug: am3p.slug,
      name: am3p.name,
      artist: am3p.artist,
      bpm: am3p.bpm,
      seriesList: [mockSoftwareList[1]]
    },
    {
      slug: paranoiaFirst.slug,
      name: paranoiaFirst.name,
      artist: paranoiaFirst.artist,
      bpm: paranoiaFirst.bpm,
      seriesList: mockSoftwareList
    }
  ]
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub } }

  describe('snapshot test', () => {
    test('renders loading state', async () => {
      // Arrange
      vi.mocked(useSoftwareList).mockResolvedValue({
        softwareList: ref(mockSoftwareList),
        isLoading: ref(false)
      })
      vi.mocked(useAsyncData).mockResolvedValue({
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
      vi.mocked(useSoftwareList).mockResolvedValue({
        softwareList: ref(mockSoftwareList),
        isLoading: ref(false)
      })
      vi.mocked(useAsyncData).mockResolvedValue({
        data: ref(songs),
        pending: ref(false)
      } as any)

      // Act
      const wrapper = await mountAsync(SongList, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('useAsyncData()', () => {
    test('calls with transform option', async () => {
      // Arrange
      vi.mocked(useSoftwareList).mockResolvedValue({
        softwareList: ref(mockSoftwareList),
        isLoading: ref(false)
      })
      vi.mocked(useAsyncData).mockReset()
      vi.mocked(useAsyncData).mockResolvedValue({
        data: ref(songs),
        pending: ref(false)
      } as any)

      // Act
      await mountAsync(SongList, { global })
      const transform = vi.mocked(useAsyncData).mock.calls[0][2]?.transform!

      // Assert
      expect(transform(rawSongData)).toStrictEqual(songs)
    })
  })
})
