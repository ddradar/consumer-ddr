import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import { mount, flushPromises } from '@vue/test-utils'
import type { DefineComponent, Plugin } from 'vue'
import { defineComponent, h, Suspense } from 'vue'

import type { SoftwareParsedContent } from '~~/composables/useSoftwareData'
import type { SoftwareListData } from '~~/composables/useSoftwareList'
import type { SongParsedContent } from '~~/composables/useSongData'

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
  title: 'Dance Dance Revolution',
  platform: 'Play Station',
  region: 'JP',
  launched: '1999-04-10',
  difficulties: {
    0: { name: 'NORMAL', class: 'is-basic' },
    1: { name: 'BASIC', class: 'is-basic' },
    2: { name: 'ANOTHER', class: 'is-difficult' },
    3: { name: 'MANIAC', class: 'is-expert' }
  },
  body: '',
  _id: 'content:series:1st-jp.md'
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

export const mockSong: SongParsedContent = {
  slug: 'butterfly',
  name: 'butterfly',
  artist: 'smile. dk',
  bpm: 135,
  series: ['1st-jp'],
  body: '',
  _id: 'content:series:1st-jp.md'
}
