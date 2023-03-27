import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Ref } from 'vue'

import type seriesList from '~~/content/series/.seriesList.json'

export interface Song {
  slug: string
  name: string
  artist: string
  bpm: number | string
  series: (keyof typeof seriesList)[]
}

export type SongParsedContent = ParsedContent & Song

export default async function (slug: string) {
  const { data } = await useAsyncData(`/songs/${slug}`, () =>
    queryContent<ParsedContent & Song>('songs')
      .where({ _type: 'markdown', slug: { $eq: slug } })
      .findOne()
  )

  return { song: data as Ref<ParsedContent & Song> }
}
