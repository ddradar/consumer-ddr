import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import Navbar from '~~/components/Navbar.vue'

import { plugins } from '../test-utils'

describe('components/Navbar.vue', () => {
  const global = {
    plugins,
    stubs: { NuxtLink: RouterLinkStub, SearchBox: true },
  }

  test('renders correctly', () => {
    // Arrange - Act
    const wrapper = mount(Navbar, { global })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('navbar-burger', () => {
    test('@click changes "is-active" class', async () => {
      // Arrange
      const wrapper = mount(Navbar, { global })

      // Act
      const burger = wrapper.find('.navbar-burger')
      const menu = wrapper.find('#navbarMenu')
      await burger.trigger('click')

      // Assert
      expect(burger.classes()).toContain('is-active')
      expect(menu.classes()).toContain('is-active')
    })
    test('@click: 2 reverts "is-active" class', async () => {
      // Arrange
      const wrapper = mount(Navbar, { global })

      // Act
      const burger = wrapper.find('.navbar-burger')
      const menu = wrapper.find('#navbarMenu')
      await burger.trigger('click')
      await burger.trigger('click')

      // Assert
      expect(burger.classes()).not.toContain('is-active')
      expect(menu.classes()).not.toContain('is-active')
    })
  })
})
