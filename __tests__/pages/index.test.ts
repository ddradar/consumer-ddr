import {
  createLocalVue,
  mount,
  RouterLinkStub,
  shallowMount,
  Wrapper
} from '@vue/test-utils'
import Buefy from 'buefy'

import Index from '~/pages/index.vue'
import { Software } from '~/types/software'

type SoftListData = Omit<Software, 'difficultyNames' | 'region'> & {
  region: string
}

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

  test('renders correctly', () => {
    // Arrange
    const softwareList: SoftListData[] = [
      {
        slug: '1st-jp',
        name: 'Dance Dance Revolution',
        platform: 'Play Station',
        region: '\u{1F1EF}\u{1F1F5}',
        launched: '1999-04-10'
      },
      {
        slug: '2nd-remix-jp',
        name: 'Dance Dance Revolution 2nd ReMIX',
        platform: 'Play Station',
        region: '\u{1F1EF}\u{1F1F5}',
        launched: '1999-08-26'
      }
    ]
    const wrapper = mount(Index, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      data: () => ({ softwareList })
    })

    // Assert
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
})
