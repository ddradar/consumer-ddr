import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SoftwareInfo from '~~/components/content/SoftwareInfo.vue'

import { mountAsync } from '../../test-utils'

describe('components/content/SongList.vue', () => {
  const software = {
    slug: '1st-jp',
    title: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-04-10',
    difficultyNames: {
      '1': 'BASIC',
      '2': 'ANOTHER',
      '3': 'MANIAC',
      '5': 'NORMAL'
    }
  }

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockReturnValue({ data: ref(software) } as any)

      // Act
      const wrapper = await mountAsync(SoftwareInfo, {
        props: { series: software.slug }
      })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
