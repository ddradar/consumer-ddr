import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Charts from '~~/components/content/Charts.vue'

describe('components/content/Charts.vue', () => {
  const difficulties = [
    { name: 'BEGINNER', type: 'info' },
    { name: 'BASIC', type: 'warning' },
    { name: 'DIFFICULT', type: 'danger' },
    { name: 'EXPERT', type: 'success' },
    { name: 'CHALLENGE', type: 'primary' },
  ]
  test('renders badges', () => {
    const wrapper = mount(Charts, {
      global: { stubs: { Badge: true } },
      props: { difficulties, charts: '0,1,2,3,4', levels: '1,2,3,4,5' },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
