import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'

import type { Song } from '~~/src/content'

export type SongParsedContent = ParsedContent & Song

export default async function (slug: string) {
  const { data } = await useAsyncData(`/songs/${slug}`, () =>
    queryContent<SongParsedContent>()
      .where({ _type: 'markdown', slug: { $eq: slug } })
      .findOne()
  )

  return { song: data as Ref<SongParsedContent> }
}
