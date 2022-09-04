import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import App from '~~/app.vue'

describe('app.vue', () => {
  test('renders correctly', () => {
    // Arrange - Act
    const wrapper = mount(App, {
      global: { stubs: { Navbar: true, NuxtPage: true } }
    })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
})
