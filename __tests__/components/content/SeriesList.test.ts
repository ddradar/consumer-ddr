import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import SeriesList from '~~/components/content/SeriesList.vue'

describe('components/content/SeriesList.vue', () => {
  test('renders series link', () => {
    const wrapper = mount(SeriesList, {
      global: { stubs: { NuxtLink: RouterLinkStub } },
      props: { series: ['1st-jp', 'gb', 'us'] }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
