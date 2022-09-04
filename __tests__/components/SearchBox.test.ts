import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SearchBox, { SearchSongResult } from '~~/components/SearchBox.vue'

import { mountAsync, plugins } from '../test-utils'

describe('components/SearchBox.vue', () => {
  const songData: SearchSongResult[] = [
    { slug: 'boys-smiledk', name: 'BOYS', artist: 'smile. dk' },
    { slug: 'butterfly', name: 'butterfly', artist: 'smile. dk' },
    { slug: 'little-bitch', name: 'LITTLE BITCH', artist: 'THE SPECIALS' },
    { slug: 'my-fire', name: 'MY FIRE', artist: 'X-TREME' }
  ]

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

  describe('term', () => {
    test('@change renders autocomplete', async () => {
      // Arrange
      const data = ref(songData)
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
      const data = ref(songData)
      const pending = ref(false)
      vi.mocked(useLazyAsyncData).mockResolvedValue({ data, pending } as any)
      const push = vi.fn()
      vi.mocked(useRouter).mockReturnValue({ push } as any)

      // Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })
      await wrapper.find('input.input').setValue('sm')
      await wrapper.find('.dropdown-item').trigger('click')

      // Assert
      expect(push).toBeCalledWith(`/songs/${songData[0].slug}`)
    })
  })
})
