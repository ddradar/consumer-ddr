import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SearchBox, { SearchSongResult } from '~~/components/SearchBox.vue'
import boysFirst from '~~/content/1st-jp/boys-smiledk.json'
import butterfly from '~~/content/1st-jp/butterfly.json'
import littleBitch from '~~/content/1st-jp/little-bitch.json'
import myFire from '~~/content/1st-jp/my-fire.json'
import boysSecond from '~~/content/2nd/boys-smiledk.json'

import { mountAsync, plugins } from '../test-utils'

const rawSongData = [boysFirst, butterfly, littleBitch, myFire, boysSecond].map(
  (d) => ({ slug: d.slug, name: d.name, artist: d.artist })
)

describe('components/SearchBox.vue', () => {
  const songs: SearchSongResult[] = [...rawSongData]
  songs.pop()

  describe('snapshot test', () => {
    test('{ isLoading: true, term: "" } renders loading state', async () => {
      // Arrange
      const data = ref([])
      const pending = ref(true)
      vi.mocked(useLazyAsyncData).mockResolvedValue({ data, pending } as any)

      // Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
    test('{ isLoading: false, term: "" } renders input without autocomplete', async () => {
      // Arrange
      const data = ref([])
      const pending = ref(false)
      vi.mocked(useLazyAsyncData).mockResolvedValue({ data, pending } as any)

      // Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('useLazyAsyncData()', () => {
    test('calls with transform option', async () => {
      // Arrange
      const data = ref([])
      const pending = ref(false)
      vi.mocked(useLazyAsyncData).mockReset()
      vi.mocked(useLazyAsyncData).mockResolvedValue({ data, pending } as any)

      // Act
      await mountAsync(SearchBox, { global: { plugins } })
      const transform = vi.mocked(useLazyAsyncData).mock.calls[0][2]?.transform!

      // Assert
      expect(transform(rawSongData)).toStrictEqual(songs)
    })
  })

  describe('term', () => {
    test('@change renders autocomplete', async () => {
      // Arrange
      const data = ref(songs)
      const pending = ref(false)
      vi.mocked(useLazyAsyncData).mockResolvedValue({ data, pending } as any)

      // Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })
      await wrapper.find('input.input').setValue('sm')

      // Assert
      expect(wrapper.findAll('.dropdown-item')).toHaveLength(2)
    })
  })

  describe('autocomplete', () => {
    test('@select calls router.push("/songs/{id}")', async () => {
      // Arrange
      const data = ref(songs)
      const pending = ref(false)
      vi.mocked(useLazyAsyncData).mockResolvedValue({ data, pending } as any)
      const push = vi.fn()
      vi.mocked(useRouter).mockReturnValue({ push } as any)

      // Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })
      await wrapper.find('input.input').setValue('sm')
      await wrapper.find('.dropdown-item').trigger('click')

      // Assert
      expect(push).toBeCalledWith(`/songs/${songs[0].slug}`)
    })
  })
})
