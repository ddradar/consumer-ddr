import { mockNuxtImport } from 'nuxt-vitest/utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSongData from '~~/composables/useSongData'
import SongDetail from '~~/pages/songs/[id].vue'

import { mockSong, mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSongData')
mockNuxtImport('useRoute', () => () => ({ params: { id: mockSong.slug } }))

describe('pages/songs/[id].vue', () => {
  const global = { plugins, stubs: { ContentRenderer: true } }

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      // Arrange
      vi.mocked(useSongData).mockResolvedValue({ song: ref(mockSong) })

      // Act
      const wrapper = await mountAsync(SongDetail, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
