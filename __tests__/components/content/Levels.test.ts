import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Levels from '~~/components/content/Levels.vue'

describe('components/content/Levels.vue', () => {
  test.each([
    ['/playstation-jp/1st', '1'],
    ['/playstation-jp/1st,/playstation-jp/2nd', '2'],
    ['/playstation-jp/1st,/playstation-jp/2nd', '2,3'],
  ])('(links: %s, level: %s) renders expected badge', (links, level) => {
    const wrapper = mount(Levels, {
      global: { stubs: { Badge: true, NuxtLink: RouterLinkStub } },
      props: { links, level },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
