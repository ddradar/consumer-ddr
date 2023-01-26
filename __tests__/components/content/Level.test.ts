import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'

import Level from '~~/components/content/Level.vue'

vi.mocked(resolveComponent).mockReturnValue(RouterLinkStub as any)

describe('components/content/Level.vue', () => {
  test('renders series link', () => {
    const wrapper = mount(Level, { props: { slug: '1st-jp', level: 5 } })
    expect(wrapper.element).toMatchSnapshot()
  })
})
