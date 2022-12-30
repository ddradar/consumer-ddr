import { beforeEach, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SearchBox from '~~/components/SearchBox.vue'
import useSongList from '~~/composables/useSongList'

import { mountAsync, plugins } from '../test-utils'

vi.mock('~~/composables/useSongList')

describe('components/SearchBox.vue', () => {
  const songs = [
    { slug: 'boys-smiledk', name: 'BOYS', artist: 'smile. dk' },
    { slug: 'butterfly', name: 'butterfly', artist: 'smile. dk' },
    { slug: 'little-bitch', name: 'LITTLE BITCH', artist: 'THE SPECIALS' },
    { slug: 'my-fire', name: 'MY FIRE', artist: 'X-TREME' }
  ]
  beforeEach(() => {
    vi.mocked(useSongList).mockResolvedValue({ songs: ref(songs) } as any)
  })

  describe('snapshot test', () => {
    test('{ term: "" } renders input without autocomplete', async () => {
      // Arrange - Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('term', () => {
    test('@change renders autocomplete', async () => {
      // Arrange - Act
      const wrapper = await mountAsync(SearchBox, { global: { plugins } })
      await wrapper.find('input.input').setValue('sm')

      // Assert
      expect(wrapper.findAll('.dropdown-item')).toHaveLength(2)
    })
  })

  describe('autocomplete', () => {
    test('@select calls router.push("/songs/{id}")', async () => {
      // Arrange
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
