import { beforeAll, describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import SeriesDetail from '~~/pages/series/[id].vue'

import { mountAsync, plugins } from '../../test-utils'

describe('pages/series/[id].vue', () => {
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
  const stubs = { ContentRenderer: true, Head: true, Title: true }
  const global = { plugins, stubs }

  beforeAll(() => {
    vi.mocked(useRoute).mockReturnValue({ params: { id: '1st-jp' } } as any)
  })

  describe('snapshot test', () => {
    test('renders correctly', async () => {
      // Arrange
      vi.mocked(useAsyncData).mockReturnValue({ data: ref(software) } as any)

      // Act
      const wrapper = await mountAsync(SeriesDetail, { global })

      // Assert
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
