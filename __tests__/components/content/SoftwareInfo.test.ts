import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SoftwareInfo from '~~/components/content/SoftwareInfo.vue'
import useSoftwareData from '~~/composables/useSoftwareData'

import { mockSoftware, mountAsync } from '../../test-utils'

vi.mock('~~/composables/useSoftwareData')

describe('components/content/SongList.vue', () => {
  describe('snapshot test', () => {
    test('renders correctly', async () => {
      // Arrange
      vi.mocked(useSoftwareData).mockResolvedValue({
        software: ref(mockSoftware)
      })

      // Act
      const wrapper = await mountAsync(SoftwareInfo, {
        props: { series: mockSoftware.slug }
      })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
