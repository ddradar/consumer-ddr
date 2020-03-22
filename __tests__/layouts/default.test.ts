import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'
import { mocked } from 'ts-jest/utils'

import DefaultLayout from '~/layouts/default.vue'
import { getSoftwareList } from '~/plugins/software-repository'

jest.mock('~/plugins/software-repository')
mocked(getSoftwareList).mockReturnValue([
  {
    id: '1st-jp',
    name: 'Dance Dance Revolution',
    region: 'JP',
    platform: 'Play Station',
    launched: new Date('1999-04-10')
  },
  {
    id: '2nd-remix-jp',
    name: 'Dance Dance Revolution 2nd ReMIX',
    region: 'JP',
    platform: 'Play Station',
    launched: new Date('1999-08-26')
  },
  {
    id: 'gb-1',
    name: 'Dance Dance Revolution GB',
    region: 'None',
    platform: 'GAME BOY COLOR',
    launched: new Date('2000-08-03')
  },
  {
    id: 'x2-us',
    name: 'Dance Dance Revolution X2',
    region: 'US',
    platform: 'Play Station 2',
    launched: new Date('2009-10-27')
  }
])
const localVue = createLocalVue()
localVue.use(Buefy)

describe('layouts/default.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(DefaultLayout, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
        Nuxt: true
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(DefaultLayout, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
        Nuxt: true
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
