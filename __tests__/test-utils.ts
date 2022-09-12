import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import type { DefineComponent, Plugin } from 'vue'
import { defineComponent, h, Suspense } from 'vue'

import type { SoftwareParsedContent } from '~~/composables/useSoftwareData'
import type { SoftwareListData } from '~~/composables/useSoftwareList'

export const plugins: (Plugin | [Plugin, ...any[]])[] = [[Oruga, bulmaConfig]]

export const mountAsync = async <T extends DefineComponent<any, any, any, any>>(
  component: T,
  options: Parameters<typeof mount<T>>[1]
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
  color: 'darkviolet',
  title: 'Dance Dance Revolution',
  platform: 'Play Station',
  region: 'JP',
  launched: '1999-04-10',
  difficultyNames: {
    '1': 'BASIC',
    '2': 'ANOTHER',
    '3': 'MANIAC',
    '6': 'NORMAL'
  },
  body: '',
  _id: 'content:1st-jp:index.md'
}

export const mockSoftwareList: SoftwareListData[] = [
  {
    slug: '1st-jp',
    color: 'darkviolet',
    title: 'Dance Dance Revolution',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-04-10'
  },
  {
    slug: '2nd',
    color: 'mediumblue',
    title: 'Dance Dance Revolution 2nd ReMIX',
    platform: 'Play Station',
    region: 'JP',
    launched: '1999-08-26'
  }
]
