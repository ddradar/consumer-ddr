import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Charts from '~~/components/content/Charts.vue'

describe('components/content/Charts.vue', () => {
  const difficulties = {
    0: { name: 'NORMAL', class: 'is-basic' },
    1: { name: 'BASIC', class: 'is-basic' },
    2: { name: 'ANOTHER', class: 'is-difficult' },
    3: { name: 'MANIAC', class: 'is-expert' },
  }
  test('renders badges', () => {
    const wrapper = mount(Charts, {
      global: { stubs: { Badge: true } },
      props: { difficulties, charts: '0,1,2,3', levels: '1,2,3,4' },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
