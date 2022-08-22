import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import App from '~~/app.vue'
import Navbar from '~~/components/Navbar.vue'

import { plugins } from './test-utils'

describe('app.vue', () => {
  test('renders correctly', () => {
    // Arrange - Act
    const wrapper = mount(App, {
      global: {
        plugins,
        stubs: { NuxtLink: RouterLinkStub, Navbar, NuxtPage: true }
      }
    })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
})
