import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import type { Plugin } from 'vue'
import { defineComponent, h, Suspense } from 'vue'

import type { SoftwareListData } from '~~/composables/useSoftwareList'
import type { SoftwareParsedContent } from '~~/src/content'

export const plugins: (Plugin | [Plugin, ...any[]])[] = [[Oruga, bulmaConfig]]

export const mountAsync = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  options: Omit<Parameters<typeof mount>[1], 'props'> & { props?: {} }
) => {
  const mountOptions = { ...options }
  delete mountOptions.props
  const wrapper = mount(
    defineComponent({
      render() {
        return h(Suspense, null, {
          default: h(component, options?.props),
          fallback: h('div', 'fallback')
        })
      }
    }),
    mountOptions
  )

  await flushPromises()
  return wrapper
}

export const mockSoftware: SoftwareParsedContent = {
  slug: '1st-jp',
  title: 'Dance Dance Revolution',
  platform: 'Play Station',
  region: 'JP',
  launched: '1999-04-10',
  difficultyNames: {
    '1': 'BASIC',
    '2': 'ANOTHER',
    '3': 'MANIAC',
    '5': 'NORMAL'
  },
  body: '',
  _id: 'content:1st-jp:index.md'
}

export const mockSoftwareList: SoftwareListData[] = [
  {
    slug: '1st-jp',
    title: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-04-10'
  },
  {
    slug: '2nd',
    title: 'Dance Dance Revolution 2nd ReMIX',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-08-26'
  }
]
