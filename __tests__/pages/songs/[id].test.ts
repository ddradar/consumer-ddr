import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSongData from '~~/composables/useSongData'
import SongDetail from '~~/pages/songs/[id].vue'

import { mockSong, mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSongData')

describe('pages/songs/[id].vue', () => {
  const stubs = { ContentRenderer: true, Head: true, Title: true }
  const global = { plugins, stubs }

  beforeAll(() => {
    vi.mocked(useRoute).mockReturnValue({
      params: { id: mockSong.slug }
    } as any)
  })

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
