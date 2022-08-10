import { mount, RouterLinkStub, shallowMount, Wrapper } from '@vue/test-utils'

import { createVue } from '~/__tests__/utils'
import Index from '~/pages/index.vue'
import { Software } from '~/types/software'

type SoftListData = Omit<Software, 'difficultyNames' | 'region'> & {
  region: string
}

const localVue = createVue()

describe('pages/index.vue', () => {
  let wrapper: Wrapper<Index>
  const stubs = { NuxtLink: RouterLinkStub }
  beforeEach(() => {
    wrapper = shallowMount(Index, { localVue, stubs })
  })

  test('renders correctly', async () => {
    // Arrange - Act
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
    const data = () => ({ softwareList })
    const wrapper = mount(Index, { localVue, stubs, data })
    await wrapper.vm.$nextTick()

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
