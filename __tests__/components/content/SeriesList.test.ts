import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'

import SeriesList from '~~/components/content/SeriesList.vue'

vi.mocked(resolveComponent).mockReturnValue(RouterLinkStub as any)

describe('components/content/SeriesList.vue', () => {
  test('renders series link', () => {
    const wrapper = mount(SeriesList, {
      props: { series: ['1st-jp', 'gb', 'us'] }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
