import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'

import Index from '~/pages/index.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('pages/index.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(Index, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(Index, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('getRegionFlag()', () => {
    let getRegionFlag: (region: string) => string
    beforeEach(() => {
      getRegionFlag = (wrapper.vm as any).getRegionFlag
    })

    test.each(['', 'foo', 'JPN', 'CN'])(
      'returns "?" if param is "%s"',
      (region) => {
        expect(getRegionFlag(region)).toBe('?')
      }
    )
    test.each([
      ['\u{1F1EF}\u{1F1F5}', 'JP'],
      ['\u{1F1EA}\u{1F1FA}', 'EU'],
      ['\u{1F1FA}\u{1F1F8}', 'US']
    ])('returns "%s" if param is "%s"', (expected, region) => {
      expect(getRegionFlag(region)).toBe(expected)
    })
  })
})
