import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Charts from '~~/components/content/Charts.vue'

import { mockSoftware } from '../../test-utils'

describe('components/content/Charts.vue', () => {
  test('renders tags', () => {
    const wrapper = mount(Charts, {
      props: {
        difficulties: mockSoftware.difficulties,
        charts: '0,1,2,3',
        levels: '1,2,3,4'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
