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
