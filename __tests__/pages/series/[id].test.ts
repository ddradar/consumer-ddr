import { mockNuxtImport } from 'nuxt-vitest/utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSoftwareData from '~~/composables/useSoftwareData'
import SeriesDetail from '~~/pages/series/[id].vue'

import { mockSoftware, mountAsync, plugins } from '../../test-utils'

vi.mock('~~/composables/useSoftwareData')
mockNuxtImport('useRoute', () => () => ({ params: { id: mockSoftware.slug } }))

describe('pages/series/[id].vue', () => {
  const global = { plugins, stubs: { ContentRenderer: true } }

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      // Arrange
      const software = ref(mockSoftware)
      vi.mocked(useSoftwareData).mockResolvedValue({ software })

      // Act
      const wrapper = await mountAsync(SeriesDetail, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
