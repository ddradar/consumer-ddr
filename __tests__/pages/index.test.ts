import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'
import { mocked } from 'ts-jest/utils'

import Index from '~/pages/index.vue'
import { getSoftwareList } from '~/plugins/software-repository'

const localVue = createLocalVue()
localVue.use(Buefy)
jest.mock('~/plugins/software-repository')
mocked(getSoftwareList).mockReturnValue([
  {
    id: '1st-jp',
    name: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: new Date('1999-04-10')
  },
  {
    id: '2nd-remix-jp',
    name: 'Dance Dance Revolution 2nd ReMIX',
    platform: 'Play Station',
    region: 'JP',
    launched: new Date('1999-08-26')
  }
])

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

  test('renders correctly', () => {
    const wrapper = mount(Index, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  describe('head()', () => {
    test('returns { title: "Consumer DDR" }', () => {
      // Arrange
      const head = wrapper.vm.$options.head as any

      // Act & Assert
      expect(head.call(wrapper.vm)).toStrictEqual({
        title: 'Consumer DDR',
        titleTemplate: ''
      })
    })
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
