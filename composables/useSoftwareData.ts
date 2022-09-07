import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'

import type { Software } from '~~/src/content'

export type SoftwareParsedContent = ParsedContent & Software

export default async function (slug: string) {
  const { data } = await useAsyncData(`/software/${slug}`, () =>
    queryContent<SoftwareParsedContent>(slug)
      .where({ _type: 'markdown', slug })
      .findOne()
  )

  return { software: data as Ref<SoftwareParsedContent> }
}
