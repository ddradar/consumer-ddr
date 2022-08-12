import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import type { Plugin } from 'vue'
import { defineComponent, h, Suspense } from 'vue'

export const plugins: (Plugin | [Plugin, ...any[]])[] = [[Oruga, bulmaConfig]]

export const mountAsync = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  options: Parameters<typeof mount>[1]
) => {
  const wrapper = mount(
    defineComponent({
      render() {
        return h(Suspense, null, {
          default: h(component),
          fallback: h('div', 'fallback')
        })
      }
    }),
    options
  )

  await flushPromises()
  return wrapper
}
