import { RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import Index from '~~/pages/index.vue'
import type { SoftwareParsedContent } from '~~/src/content'

import { mountAsync, plugins } from '../test-utils'

type SoftListData = Omit<SoftwareParsedContent, 'difficultyNames'>

describe('pages/index.vue', () => {
  test('renders correctly', async () => {
    // Arrange
    const data: SoftListData[] = [
      {
        slug: '1st-jp',
        title: 'Dance Dance Revolution',
        platform: 'Play Station',
        region: 'JP',
        launched: '1999-04-10'
      },
      {
        slug: '2nd-remix-jp',
        title: 'Dance Dance Revolution 2nd ReMIX',
        platform: 'Play Station',
        region: 'JP',
        launched: '1999-08-26'
      }
    ]
    vi.mocked(useAsyncData).mockResolvedValue({
      data: ref(data),
      pending: ref(false)
    } as any)

    // Act
    const wrapper = await mountAsync(Index, {
      global: {
        plugins,
        stubs: { NuxtLink: RouterLinkStub, Head: true, Title: true }
      }
    })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
})
