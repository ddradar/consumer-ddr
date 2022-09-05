import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSoftwareData from '~~/composables/useSoftwareData'
import SeriesDetail from '~~/pages/series/[id].vue'

import { mockSoftware, mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSoftwareData')

describe('pages/series/[id].vue', () => {
  const stubs = { ContentRenderer: true, Head: true, Title: true }
  const global = { plugins, stubs }

  beforeAll(() => {
    vi.mocked(useRoute).mockReturnValue({
      params: { id: mockSoftware.slug }
    } as any)
  })

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      // Arrange
      vi.mocked(useSoftwareData).mockResolvedValue({
        software: ref(mockSoftware)
      })

      // Act
      const wrapper = await mountAsync(SeriesDetail, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
