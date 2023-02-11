import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import ProseA from '~~/components/content/ProseA.vue'
import ProseH2 from '~~/components/content/ProseH2.vue'
import ProseH3 from '~~/components/content/ProseH3.vue'
import ProseP from '~~/components/content/ProseP.vue'
import ProseTable from '~~/components/content/ProseTable.vue'

import { plugins } from '../../../__tests__/test-utils'

describe('components/content/', () => {
  const global = { plugins, stubs: { NuxtLink: RouterLinkStub } }

  describe('ProseA.vue', () => {
    test('{ href: "/songs" } renders <NuxtLink>', () => {
      const wrapper = mount(ProseA, {
        global,
        slots: { default: 'Link' },
        props: { href: '/songs' },
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('ProseH2.vue', () => {
    test('{ id: "Header2" } renders <h2>', () => {
      const wrapper = mount(ProseH2, {
        global,
        slots: { default: 'Header2' },
        props: { id: 'Header2' },
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('ProseH3.vue', () => {
    test('{ id: "Header3" } renders <h3>', () => {
      const wrapper = mount(ProseH3, {
        global,
        slots: { default: 'Header3' },
        props: { id: 'Header3' },
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('ProseP.vue', () => {
    test('renders <p>', () => {
      const wrapper = mount(ProseP, { global, slots: { default: 'Content' } })
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('ProseTable.vue', () => {
    test('renders <table>', () => {
      const wrapper = mount(ProseTable, {
        global,
        slots: { default: 'Content' },
      })
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
