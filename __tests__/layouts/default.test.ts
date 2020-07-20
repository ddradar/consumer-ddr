import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import Buefy from 'buefy'

import DefaultLayout from '~/layouts/default.vue'

type MenuItem = {
  title: string
  subMenu: { name: string; href: string }[]
}

const localVue = createLocalVue()
localVue.use(Buefy)

describe('layouts/default.vue', () => {
  test('renders correctly', () => {
    // Arrange - Act
    const menuList: MenuItem[] = [
      {
        title: 'Play Station (JP)',
        subMenu: [
          { name: 'Dance Dance Revolution', href: '/series/1st-jp/' },
          {
            name: 'Dance Dance Revolution 2nd ReMIX',
            href: '/series/2nd-remix-jp/'
          }
        ]
      },
      {
        title: 'GAME BOY COLOR',
        subMenu: [{ name: 'Dance Dance Revolution GB', href: '/series/gb-1/' }]
      },
      {
        title: 'Play Station 2 (US)',
        subMenu: [{ name: 'Dance Dance Revolution X2', href: '/series/x2-us/' }]
      }
    ]
    const wrapper = mount(DefaultLayout, {
      localVue,
      stubs: { NuxtLink: RouterLinkStub, Nuxt: true },
      data: () => ({ menuList })
    })

    // Assert
    expect(wrapper.element).toMatchSnapshot()
  })
})
