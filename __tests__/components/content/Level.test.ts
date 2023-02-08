import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Level from '~~/components/content/Level.vue'

describe('components/content/Level.vue', () => {
  test('renders series link', () => {
    const wrapper = mount(Level, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
      props: { slug: '1st-jp', level: 5 },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
