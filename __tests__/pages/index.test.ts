import { RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { ref } from 'vue'

import useSoftwareList from '~~/composables/useSoftwareList'
import Index from '~~/pages/index.vue'

import { mockSoftwareList, mountAsync, plugins } from '../test-utils'

vi.mock('~~/composables/useSoftwareList')

describe('pages/index.vue', () => {
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub } }

  test('renders correctly', async () => {
    // Arrange
    const softwareList = ref(mockSoftwareList)
    vi.mocked(useSoftwareList).mockResolvedValue({ softwareList })

    // Act
    const wrapper = await mountAsync(Index, { global })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
})
